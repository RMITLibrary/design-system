# RMIT Library Design System

## Getting Started

This design system aims to provide a set of reusable components for building products in the RMIT library digital ecosystem. These components work together well and can be interchanged with a degree of modularity. The system provides a flexible and easy-to-use starting point to design and develop your product (additional features or adaptations specific to your project may be required).

The system has been designed and developed rapidly and is by no means comprehensive. The intention is to iterate and extend the system's capabilities over time, when and where design and development resources become available.

## Benefits

- Consistency across different products, creating a sense of familiarity for our users (both students and educators).
- Rapid prototyping at increased fidelity.
- Quicker progression from design to development.
- Easier to make changes across a number of products at once.

## Design

An extensive Figma file is available. This file contains both design-specific documentation and components that can be laid out and altered to produce high fidelity prototypes. Figma makes it easy for these prototypes to be shared and for people to comment and collaborate on designs. It also features a development mode which allows front-end developers to get stylesheet and markup information.

## Development

The design system extends the Bootstrap framework. There are two approaches to extending Bootstrap:

1. **Simple Method**: Include the compiled CSS in the `<head>` section of your page and add your own custom CSS after to override and extend the styles required.

    ```html
    <head>
        <!-- link to design system css -->
        <link href="https://rmitlibrary.github.io/design-system/sass/main.min.css" rel="stylesheet">
        <!-- link to your own custom styles -->
        <link href="path.to/custom-styles.css" rel="stylesheet">
    </head>
    ```

2. **Advanced Method**: Copy and compile the design system's SCSS files into a single CSS file. You'll need a **Sass compiler**. This approach allows your styles to access mixins and variables from both the design system and Bootstrap itself. 

### SCSS File Structure

The main SCSS file is structured as follows:

```scss
// Import bootstrap functions
// Declare colour variables
// Declare other variables
// Declare typography variables
// Import bootstrap styles
// Import design system styles
// Import app specific styles
```

File structure as follows:

```
your-project/
└── sass/
    ├── main.scss
    ├── app-specific/
    ├── bootstrap/
    └── design-system/
```

## Setting Up Hugo

For detailed instructions on installing Hugo, please refer to this [beginner tutorial by CloudCannon](https://cloudcannon.com/tutorial/2021/11/08/getting-started-with-hugo/).