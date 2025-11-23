# Frontend Monorepo

Turborepo + Vite + React + TS + Tailwind CSS v4 + shadcn/ui.

This repository contains the source code of monorepo.

## Table of Contents

- [Frontend Monorepo](#frontend-monorepo)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Develpment](#develpment)
  - [Build](#build)
  - [Deployment](#deployment)
  - [Monorepo Structure \& Usage](#monorepo-structure--usage)

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone
    ```
2. Navigate to the project directory:
    ```bash
    cd turborepo-vite-react-ts-tailwindcss4-shadcn
    ```
3. Install the dependencies:
    ```bash
    pnpm install
    ```

## Develpment

Just run all of the applications via this command:

```bash
turbo dev
```

## Build

Just build all of the applications via this command:

```bash
turbo build
```

## Deployment

Deployment is done through Vercel. And Vercel determines that the project is a Turborepo (wow!).

## Monorepo Structure & Usage

This project is a monorepo managed with Turborepo. It contains multiple packages that can be developed and built together.

To start the development server for all packages, run:
```bash
turbo dev
```

To build all packages for production, run:
```bash
turbo build
```

To add a new sub-project to the `apps` folder, follow these steps:

1. Navigate to the `apps` directory:
    ```bash
    cd apps
    ```
2. Initialize your new application. This can be any frontend application. For example, to create a new Vite project:
    ```bash
    pnpm create vite my-react-app --template react-swc-ts
    ```

After adding the new sub-project, you can manage it along with other packages using Turborepo commands.
