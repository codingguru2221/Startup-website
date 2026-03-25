import { Router, type IRouter } from "express";
import { submitServiceRequest, type ServiceRequestInput } from "../services/service-requests";

const router: IRouter = Router();

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function parseServiceRequest(body: Record<string, unknown>): ServiceRequestInput {
  const { name, age, email, phone, service, description, budget } = body;

  if (!isNonEmptyString(name)) {
    throw new Error("Name is required.");
  }
  if (!isNonEmptyString(email)) {
    throw new Error("Email is required.");
  }
  if (!isNonEmptyString(service)) {
    throw new Error("Service is required.");
  }
  if (!isNonEmptyString(description)) {
    throw new Error("Description is required.");
  }
  if (!isNonEmptyString(budget)) {
    throw new Error("Budget is required.");
  }

  return {
    name: name.trim(),
    age: typeof age === "string" ? age.trim() : "",
    email: email.trim(),
    phone: typeof phone === "string" ? phone.trim() : "",
    service: service.trim(),
    description: description.trim(),
    budget: budget.trim(),
  };
}

router.post("/service-requests", async (req, res) => {
  try {
    const payload = parseServiceRequest(req.body as Record<string, unknown>);
    const result = await submitServiceRequest({
      ...payload,
      submittedAt: new Date().toISOString(),
      source: "website-buy-form",
    });

    res.status(201).json({
      ok: true,
      message: "Service request stored successfully.",
      ...result,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unexpected server error";
    req.log.error({ err: error }, "Failed to submit service request");
    res.status(500).json({
      ok: false,
      message,
    });
  }
});

export default router;
