import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import App from "./App";
import { projects } from "./data/projects";

function renderApp() {
  render(<App />);
}

describe("AKP frontend", () => {
  it("renders the critical sections for the landing page", () => {
    renderApp();

    expect(screen.getByRole("heading", { name: /Architektur als\s*verantwortlicher Prozess/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Ausgewählte Projekte/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Fachdiskurs & Expertise/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Projekt besprechen/i })).toBeInTheDocument();
    expect(screen.getAllByText("info@architekten-kauschke.de").length).toBeGreaterThan(0);
  });

  it("filters projects and opens an accessible project dialog", async () => {
    const user = userEvent.setup();
    renderApp();

    await user.click(screen.getByRole("button", { name: "Pflege & Gesundheit" }));

    expect(screen.getByText("2 Projekte gefunden")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Projektdetails öffnen: Service-Wohnen/i })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /Projektdetails öffnen: Rheinblick Wohnen/i })).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /Projektdetails öffnen: Service-Wohnen/i }));

    expect(screen.getByRole("dialog", { name: /Service-Wohnen mit medizinischer Versorgung/i })).toBeInTheDocument();
    expect(screen.getByText(/Alle Seniorenwohnungen barrierefrei/i)).toBeInTheDocument();
  });

  it("filters publications by type and keeps unrelated entries hidden", async () => {
    const user = userEvent.setup();
    renderApp();

    await user.click(screen.getByRole("button", { name: "Digitale Planung" }));

    expect(screen.getByText("CAD — Die Hardware")).toBeInTheDocument();
    expect(screen.getByText("Das Chaos nicht automatisieren")).toBeInTheDocument();
    expect(screen.queryByText(/Architektur in Berlin, Jahrbuch 2003/i)).not.toBeInTheDocument();
  });

  it("keeps every project image index inside the rendered image manifest", () => {
    const renderedImageCount = 6;
    const invalidProjects = projects.filter((project) => project.imageIndex < 0 || project.imageIndex >= renderedImageCount);

    expect(invalidProjects).toEqual([]);
  });
});
