---
title: "Matte 7 Architects"
summary: "Website and content system for a Hyderabad architecture studio, with an admin area the founders run themselves."
year: 2026
role: "Full-stack development"
status: "Live"
order: 2
stack:
  - TypeScript
  - React 19
  - TanStack Start
  - Tailwind CSS 4
  - Supabase
  - PostgreSQL
  - Row Level Security
  - Radix UI
live: "https://matte7architects.com"
cover: "../../assets/work/matte-7-home.jpg"
coverAlt: "Matte 7 Architects home page: a sandstone house at dusk under the headline 'Spaces of quiet permanence'"
---

## The brief

Matte 7 is a small studio in Hyderabad working across architecture, interiors and landscape. They needed a site that looks like their work, quiet and editorial, and that they could keep up to date without calling a developer every time a project finished.

## What I built

- **The public site**: a single long page covering the studio, its services, the people behind it, selected projects, process and contact.
- **An admin area** where the founders sign in to add and edit projects. The projects on the public page are read from the database, so publishing is a form, not a deploy.
- **An enquiries inbox**: the contact form saves each enquiry, and admins can read them, mark them handled or delete them.
- **Search groundwork**: a generated sitemap, structured data describing the studio, and a robots file.

## Signed in is not the same as admin

The studio is also building ARCH//1000, a quiz arena for architecture students and professionals, on the same site. Its players sign in with an email link, which means the site has two very different kinds of authenticated user.

The first version of the admin rules allowed any signed-in user to write projects. Once quiz players can sign in, that is a hole. I replaced it with an explicit `admins` table and an `is_admin()` check in Postgres, then rewrote the row-level security policies so that only admins can read enquiries or change projects, whatever the client sends.

Access-control problems are a large part of my day job, so this was the part of the build I cared most about getting right.

## In progress: ARCH//1000

The arena is built in the repository and not public yet. Players pick an audience, student or professional, and play rounds across ten topics, from structures to environmental design. There are four round types: by topic, a short daily round, a surprise mix, and a round drawn from the player's weakest topics. Progress, streaks and per-topic accuracy are stored per player.
