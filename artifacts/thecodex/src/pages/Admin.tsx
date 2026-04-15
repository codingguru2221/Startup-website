import { FormEvent, useEffect, useState } from "react";
import { Link } from "wouter";
import { Download, LogOut, Trash2, UploadCloud } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  deleteUploadedProject,
  formatFileSize,
  getUploadedProjects,
  saveUploadedProject,
  type UploadedProject,
} from "@/lib/project-storage";

const ADMIN_ID = "TheCOdex";
const ADMIN_PASSWORD = "TheCOdex@1122";
const MAX_LOCAL_ZIP_SIZE = 4 * 1024 * 1024;

function fileToDataUrl(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

export default function Admin() {
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [liveUrl, setLiveUrl] = useState("");
  const [tags, setTags] = useState("React, ZIP");
  const [zipFile, setZipFile] = useState<File | null>(null);
  const [projects, setProjects] = useState<UploadedProject[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    setIsLoggedIn(false);
    setProjects(getUploadedProjects());
  }, []);

  function refreshProjects() {
    setProjects(getUploadedProjects());
  }

  function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (loginId === ADMIN_ID && password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
      toast({
        title: "Admin login successful",
        description: "Ab aap React app ZIP upload kar sakte hain.",
      });
      return;
    }

    toast({
      title: "Login failed",
      description: "ID ya password galat hai.",
      variant: "destructive",
    });
  }

  function handleLogout() {
    setIsLoggedIn(false);
    setLoginId("");
    setPassword("");
  }

  async function handleUpload(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!zipFile) {
      toast({
        title: "ZIP file required",
        description: "React app ki .zip file select karein.",
        variant: "destructive",
      });
      return;
    }

    if (!zipFile.name.toLowerCase().endsWith(".zip")) {
      toast({
        title: "Only ZIP allowed",
        description: "Please .zip file upload karein.",
        variant: "destructive",
      });
      return;
    }

    if (zipFile.size > MAX_LOCAL_ZIP_SIZE) {
      toast({
        title: "ZIP file too large",
        description: "Local demo me 4 MB tak save hoga. AWS S3 connect karne ke baad large files upload hongi.",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);

    try {
      const downloadUrl = await fileToDataUrl(zipFile);
      const projectTitle = title.trim() || zipFile.name.replace(/\.zip$/i, "");
      const project: UploadedProject = {
        id: crypto.randomUUID(),
        title: projectTitle,
        summary: summary.trim() || "Uploaded React app ZIP ready for review and AWS deployment.",
        type: "Uploaded React App",
        fileName: zipFile.name,
        fileSize: zipFile.size,
        uploadedAt: new Date().toISOString(),
        downloadUrl,
        liveUrl: liveUrl.trim() || undefined,
        tags: tags
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean)
          .slice(0, 5),
      };

      saveUploadedProject(project);
      refreshProjects();
      setTitle("");
      setSummary("");
      setLiveUrl("");
      setTags("React, ZIP");
      setZipFile(null);

      const fileInput = document.getElementById("projectZip") as HTMLInputElement | null;
      if (fileInput) {
        fileInput.value = "";
      }

      toast({
        title: "Project uploaded",
        description: "Project page par uploaded app show ho jayegi.",
      });
    } catch {
      toast({
        title: "Upload failed",
        description: "ZIP file read nahi ho payi. Dobara try karein.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  }

  function handleDelete(projectId: string) {
    deleteUploadedProject(projectId);
    refreshProjects();
    toast({
      title: "Project removed",
      description: "Uploaded project list se hata diya gaya.",
    });
  }

  if (!isLoggedIn) {
    return (
      <Layout>
        <section className="min-h-[calc(100vh-5rem)] pt-10 pb-20">
          <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-border bg-card/85 p-6 shadow-[0_22px_70px_rgba(15,23,42,0.08)]">
              <p className="text-xs font-bold text-primary tracking-[0.2em] uppercase mb-3">Admin Login</p>
              <h1 className="text-3xl font-display font-black mb-3">TheCOdex Panel</h1>
              <p className="text-sm text-muted-foreground mb-6">
                Apps upload karne ke liye admin ID aur password enter karein.
              </p>

              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="loginId">Admin ID</Label>
                  <Input
                    id="loginId"
                    value={loginId}
                    onChange={(event) => setLoginId(event.target.value)}
                    placeholder="TheCOdex"
                    autoComplete="username"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Enter password"
                    autoComplete="current-password"
                  />
                </div>
                <Button type="submit" className="w-full">Login</Button>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="pt-8 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 rounded-2xl border border-border bg-card/85 p-5 md:p-7 shadow-[0_22px_70px_rgba(15,23,42,0.08)]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-xs font-bold text-primary tracking-[0.2em] uppercase mb-3">Admin Panel</p>
                <h1 className="text-3xl md:text-5xl font-display font-black mb-3">Upload React Apps</h1>
                <p className="text-muted-foreground max-w-2xl">
                  ZIP upload karein, details add karein, aur project page par listing publish ho jayegi.
                </p>
              </div>
              <Button type="button" variant="outline" onClick={handleLogout}>
                <LogOut className="w-4 h-4" />
                Logout
              </Button>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <form onSubmit={handleUpload} className="rounded-2xl border border-border bg-card/85 p-5 md:p-6 shadow-[0_22px_70px_rgba(15,23,42,0.08)] space-y-5">
              <div>
                <h2 className="text-2xl font-bold mb-2">New App ZIP</h2>
                <p className="text-sm text-muted-foreground">
                  Abhi ye local admin demo hai. AWS S3 connect hone par same form real bucket me upload karega.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="projectTitle">Project title</Label>
                <Input
                  id="projectTitle"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  placeholder="Ecommerce React App"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="projectSummary">Short description</Label>
                <Textarea
                  id="projectSummary"
                  value={summary}
                  onChange={(event) => setSummary(event.target.value)}
                  placeholder="React app ke bare me short detail"
                  rows={4}
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="projectTags">Tags</Label>
                  <Input
                    id="projectTags"
                    value={tags}
                    onChange={(event) => setTags(event.target.value)}
                    placeholder="React, AWS, App"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="projectLiveUrl">Live preview URL</Label>
                  <Input
                    id="projectLiveUrl"
                    value={liveUrl}
                    onChange={(event) => setLiveUrl(event.target.value)}
                    placeholder="https://cloudfront-url.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="projectZip">React app ZIP</Label>
                <Input
                  id="projectZip"
                  type="file"
                  accept=".zip,application/zip,application/x-zip-compressed"
                  onChange={(event) => setZipFile(event.target.files?.[0] ?? null)}
                  className="h-11"
                />
                <p className="text-xs text-muted-foreground">
                  Local save limit 4 MB hai. AWS S3 integration ke baad larger ZIPs safely upload hongi.
                </p>
              </div>

              <Button type="submit" disabled={isUploading} className="w-full md:w-auto">
                <UploadCloud className="w-4 h-4" />
                {isUploading ? "Uploading..." : "Upload Project"}
              </Button>
            </form>

            <div className="rounded-2xl border border-border bg-card/85 p-5 md:p-6 shadow-[0_22px_70px_rgba(15,23,42,0.08)]">
              <div className="flex items-center justify-between gap-4 mb-5">
                <div>
                  <h2 className="text-2xl font-bold">Uploaded Apps</h2>
                  <p className="text-sm text-muted-foreground">{projects.length} local project saved</p>
                </div>
                <Button asChild variant="outline" size="sm">
                  <Link href="/projects">View page</Link>
                </Button>
              </div>

              {projects.length === 0 ? (
                <div className="rounded-lg border border-dashed border-border p-6 text-sm text-muted-foreground">
                  Abhi koi ZIP upload nahi hui.
                </div>
              ) : (
                <div className="space-y-3">
                  {projects.map((project) => (
                    <div key={project.id} className="rounded-lg border border-border bg-background/70 p-4">
                      <h3 className="font-bold">{project.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        {project.fileName} - {formatFileSize(project.fileSize)}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <Button asChild variant="outline" size="sm">
                          <a href={project.downloadUrl} download={project.fileName}>
                            <Download className="w-4 h-4" />
                            Download
                          </a>
                        </Button>
                        <Button type="button" variant="destructive" size="sm" onClick={() => handleDelete(project.id)}>
                          <Trash2 className="w-4 h-4" />
                          Delete
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
