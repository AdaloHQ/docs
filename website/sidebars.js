module.exports = {
  docs: {
    Marketplace: [
      "marketplace/getting-started",
      "marketplace/library-standards",
      "marketplace/create-new-adalo-library",
      {
        type: "category",
        label: "Testing",
        items: [
          "marketplace/testing/web-testing",
          "marketplace/testing/mobile-dev-toolkit",
        ],
      },
      "marketplace/publish-new-adalo-library",
      {
        type: "category",
        label: "Examples",
        items: [
          "marketplace/examples/example-access-child-props",
          "marketplace/examples/example-conditional",
          "marketplace/examples/example-app-branding",
          "marketplace/examples/example-toggle-child-component",
          "marketplace/examples/example-actions",
          "marketplace/examples/example-menu",
          "marketplace/examples/example-slider",
          "marketplace/examples/example-custom-webpack",
          "marketplace/examples/example-force-rerender",
          "marketplace/examples/example-editor-prop",
          "marketplace/examples/example-role-list",
        ],
      },
    ],
    "API Reference": [
      {
        type: "category",
        label: "Marketplace",
        items: [
          "api-reference/marketplace/adalo-cli",
          "api-reference/marketplace/package-json",
          "api-reference/marketplace/manifest-json",
        ],
      },
    ],
  },
};
