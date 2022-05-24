module.exports = {
  docs: {
    "The Basics": [
      "docs/basics/introduction",
      "docs/basics/tutorial",
      "docs/basics/enabling-dev-mode",
      "docs/basics/create-adalo-component",
      "docs/basics/library-config",
      "docs/basics/component-config",
      "docs/basics/testing",
      "docs/basics/publishing",
    ],
    Configuration: [
      "docs/configuration/package-json",
      "docs/configuration/adalo-json",
      "docs/configuration/manifest-json",
    ],
    Workflow: [
      "docs/workflow/cross-platform",
      "docs/workflow/testing",
      "docs/workflow/webpack",
      "docs/workflow/install-scripts",
      "docs/workflow/publishing",
      "docs/workflow/managing-public-libraries",
      "docs/workflow/managing-private-libraries",
      "docs/workflow/premium-libraries",
      "docs/workflow/update-listing",
      "docs/workflow/backwards-compatibility",
    ],
    Design: [
      "docs/design/colors-branding",
      "docs/design/resizing",
      "docs/design/images",
      "docs/design/icons",
    ],
    Interactions: [
      "docs/interactions/component-rendering",
      "docs/interactions/actions",
      "docs/interactions/child-components",
      "docs/interactions/control-types",
      "docs/interactions/conditional-control",
      "docs/interactions/component-data",
      "docs/interactions/modifying-database-values",
      "docs/interactions/files-and-images",
    ],
  },

  "Component Standards": [
    "component-standards/philosophy",
    {
      type: "category",
      label: "Configuration",
      items: [
        "component-standards/configuration/package-json",
        "component-standards/configuration/adalo-json",
        "component-standards/configuration/manifest-json",
      ],
    },
    {
      type: "category",
      label: "Design",
      items: [
        "component-standards/design/design-requirements",
        "component-standards/design/resizing",
      ],
    },
    {
      type: "category",
      label: "Interactions",
      items: [
        "component-standards/interactions/actions",
        "component-standards/interactions/child-components",
        "component-standards/interactions/control-types",
        "component-standards/interactions/list-controls",
        "component-standards/interactions/exporting-data",
      ],
    },
    {
      type: "category",
      label: "Code",
      items: [
        "component-standards/code/general-guidelines",
        "component-standards/code/performance",
        "component-standards/code/dependencies",
        "component-standards/code/external-apis",
        "component-standards/code/code-style",
      ],
    },
    {
      type: "category",
      label: "Component Listing",
      items: [
        "component-standards/component-listing/name",
        "component-standards/component-listing/description",
        "component-standards/component-listing/logo",
        "component-standards/component-listing/thumbnail",
        "component-standards/component-listing/demo-app",
      ],
    },
  ],
};
