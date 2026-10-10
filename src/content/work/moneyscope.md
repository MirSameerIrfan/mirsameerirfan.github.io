---
title: "MoneyScope"
summary: "A personal finance dashboard that puts every credit card, loan and recurring bill on one calendar, so nothing slips past its due date."
year: 2026
role: "Design and full-stack development"
status: "In active development"
order: 1
stack:
  - TypeScript
  - React 19
  - TanStack Start
  - Tailwind CSS 4
  - Prisma
  - PostgreSQL
  - better-auth
  - Vitest
  - Sentry
repo: "https://github.com/MirSameerIrfan/card-manager"
---

## The problem

Due dates live in too many places: card statements, loan portals, subscription emails. Missing one costs a late fee, and the information needed to avoid it is never in one view. MoneyScope pulls credit cards, loans and recurring bills into a single dashboard and answers one question quickly: what do I owe, and when?

## What I built

- **A payments dashboard** that totals what is due, counts what falls in the current week, and lists every card, loan and bill with its status.
- **A calendar view** built on FullCalendar that shows each payment on its due date with a daily total.
- **Add and edit flows** for all three payment types, including recurring bills on a monthly or biweekly schedule.
- **Accounts** with email and password sign-up, an email verification step, and profile settings, using better-auth with route guards on the signed-in pages.
- **A typed data layer**: TanStack Start server functions validated with Zod, talking to PostgreSQL through Prisma.
- **Monitoring and tests**: Sentry for error tracking, configured per environment, and Vitest unit tests around the date and verification logic.

## The bug worth writing down

Due dates are stored in Postgres as midnight UTC. In any timezone west of UTC, turning that into a local date moves it back a day, so a bill due on the 12th showed up as due on the 11th.

The fix was to stop treating a due date as a moment in time. The app now reads the calendar date out of the stored value in UTC and rebuilds it as a local date, and the "due this week" count runs Monday to Sunday against that. Both paths are covered by tests, because this is exactly the kind of bug that comes back.

It is also the kind of problem I see from the other side at work: something is "randomly" off by one for some customers and not others, and the answer is a timezone.

## How it was run

I ran it like a team project even though it is a solo one. Work is tracked as GitHub issues, changes land through pull requests against a template, and the repository has contribution guidelines and a linted, tested main branch.
