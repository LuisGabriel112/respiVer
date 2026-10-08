Feature: Keystatic storage selection
  The admin panel at /keystatic must save edits to GitHub in production,
  so Vercel rebuilds the site with the new content. Locally it edits files on disk.

  Scenario: Production uses GitHub storage
    Given NEXT_PUBLIC_KEYSTATIC_STORAGE_KIND is "github"
    When the Keystatic storage is resolved
    Then the storage kind is "github"
    And the repo is "LuisGabriel112/respiVer"

  Scenario: Local development uses local storage
    Given NEXT_PUBLIC_KEYSTATIC_STORAGE_KIND is not set
    When the Keystatic storage is resolved
    Then the storage kind is "local"

  Scenario: Unknown value falls back to local storage
    Given NEXT_PUBLIC_KEYSTATIC_STORAGE_KIND is "GitHub"
    When the Keystatic storage is resolved
    Then the storage kind is "local"
