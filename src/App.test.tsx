import { render, screen, within } from "@testing-library/react";
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

    const dialog = screen.getByRole("dialog", { name: /Service-Wohnen mit medizinischer Versorgung/i });
    expect(dialog).toBeInTheDocument();
    expect(within(dialog).getByRole("img", { name: /Service-Wohnen mit medizinischer Versorgung in Berlin/i })).toBeInTheDocument();
    expect(screen.getByText(/Alle Seniorenwohnungen barrierefrei/i)).toBeInTheDocument();

    await user.keyboard("{Escape}");

    expect(screen.queryByRole("dialog", { name: /Service-Wohnen mit medizinischer Versorgung/i })).not.toBeInTheDocument();
  });

  it("filters publications by type and keeps unrelated entries hidden", async () => {
    const user = userEvent.setup();
    renderApp();

    await user.click(screen.getByRole("button", { name: "Digitale Planung" }));

    expect(screen.getByText("CAD — Die Hardware")).toBeInTheDocument();
    expect(screen.getByText("Das Chaos nicht automatisieren")).toBeInTheDocument();
    expect(screen.queryByText(/Architektur in Berlin, Jahrbuch 2003/i)).not.toBeInTheDocument();
  });


  it("keeps the mobile navigation accessible and closes after selecting an item", async () => {
    const user = userEvent.setup();
    renderApp();

    const menuButton = screen.getByRole("button", { name: "Menü öffnen" });
    await user.click(menuButton);

    expect(screen.getByRole("button", { name: "Menü schließen" })).toHaveAttribute("aria-expanded", "true");

    const mobileNavigation = screen.getByRole("button", { name: "Menü schließen" }).getAttribute("aria-controls");
    const mobileMenu = document.getElementById(mobileNavigation ?? "");
    expect(mobileMenu).toBeInTheDocument();

    const mobileContactLink = within(mobileMenu as HTMLElement).getByRole("button", { name: "Kontakt" });
    expect(mobileContactLink).toBeInTheDocument();

    await user.click(mobileContactLink);

    expect(screen.getByRole("button", { name: "Menü öffnen" })).toHaveAttribute("aria-expanded", "false");
  });

  it("submits the contact form through labelled fields", async () => {
    const user = userEvent.setup();
    renderApp();

    await user.type(screen.getByLabelText(/Name/i), "Erika Muster");
    await user.type(screen.getByLabelText(/E-Mail/i), "erika@example.com");
    await user.type(screen.getByLabelText(/Nachricht/i), "Bitte melden Sie sich zu einem Neubauprojekt.");
    await user.selectOptions(screen.getByLabelText(/Projekttyp/i), "Wohnungsbau");
    await user.click(screen.getByRole("button", { name: /Nachricht senden/i }));

    expect(screen.getByText("Nachricht gesendet")).toBeInTheDocument();
    expect(screen.getByText(/Wir melden uns in Kürze/i)).toBeInTheDocument();
  });

  it("keeps every project image index inside the rendered image manifest", () => {
    const renderedImageCount = 6;
    const invalidProjects = projects.filter((project) => project.imageIndex < 0 || project.imageIndex >= renderedImageCount);

    expect(invalidProjects).toEqual([]);
  });

  it("renders accessible contact fields and submit feedback", async () => {
    const user = userEvent.setup();
    renderApp();

    await user.type(screen.getByLabelText("Name *"), "Erika Muster");
    await user.type(screen.getByLabelText("E-Mail *"), "erika@example.com");
    await user.selectOptions(screen.getByLabelText("Projekttyp"), "Wohnungsbau");
    await user.type(screen.getByLabelText("Nachricht *"), "Bitte kontaktieren Sie mich zu meinem Bauvorhaben.");
    await user.click(screen.getByRole("button", { name: /Nachricht senden/i }));

    expect(screen.getByText("Nachricht gesendet")).toBeInTheDocument();
  });

  it("opens and closes the mobile navigation accessibly", async () => {
    const user = userEvent.setup();
    renderApp();

    const menuButton = screen.getByRole("button", { name: "Menü öffnen" });
    expect(menuButton).toHaveAttribute("aria-expanded", "false");

    await user.click(menuButton);

    expect(screen.getByRole("button", { name: "Menü schließen" })).toHaveAttribute("aria-expanded", "true");

    const mobileNavigation = document.getElementById("mobile-navigation");
    expect(mobileNavigation).not.toBeNull();

    await user.click(within(mobileNavigation!).getByRole("button", { name: "Kontakt" }));

    expect(screen.getByRole("button", { name: "Menü öffnen" })).toHaveAttribute("aria-expanded", "false");
  });
});
