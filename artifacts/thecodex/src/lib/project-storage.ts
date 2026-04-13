export type UploadedProject = {
  id: string;
  title: string;
  summary: string;
  type: "Uploaded React App";
  fileName: string;
  fileSize: number;
  uploadedAt: string;
  downloadUrl: string;
  liveUrl?: string;
  tags: string[];
};

const PROJECT_STORAGE_KEY = "thecodex_uploaded_projects";

export function getUploadedProjects(): UploadedProject[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const rawProjects = window.localStorage.getItem(PROJECT_STORAGE_KEY);
    if (!rawProjects) {
      return [];
    }

    const projects = JSON.parse(rawProjects);
    return Array.isArray(projects) ? projects : [];
  } catch {
    return [];
  }
}

export function saveUploadedProject(project: UploadedProject) {
  const projects = getUploadedProjects();
  window.localStorage.setItem(
    PROJECT_STORAGE_KEY,
    JSON.stringify([project, ...projects])
  );
  window.dispatchEvent(new Event("thecodex-projects-updated"));
}

export function deleteUploadedProject(projectId: string) {
  const projects = getUploadedProjects().filter((project) => project.id !== projectId);
  window.localStorage.setItem(PROJECT_STORAGE_KEY, JSON.stringify(projects));
  window.dispatchEvent(new Event("thecodex-projects-updated"));
}

export function formatFileSize(bytes: number) {
  if (bytes < 1024) {
    return `${bytes} B`;
  }

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
