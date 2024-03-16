import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
	await page.goto("http://localhost:5173/");

	// Expect a title "to contain" a substring.
	await expect(page).toHaveTitle("Vite + React + TS");
});

test("get started link", async ({ page }) => {
	await page.goto("http://localhost:5173/");

	// Click the get started link.
	await page.getByRole("button", { name: "count is 0" }).click();

	// Expects page to have a heading with the name of Installation.
	await expect(page.getByRole("button", { name: "count is 2" })).toBeVisible();
});
