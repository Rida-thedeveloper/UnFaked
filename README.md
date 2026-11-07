# UnFaked waitlist site

React + TypeScript pre-launch landing page. Install dependencies with `npm install`, then run `npm run dev`.

## UI components

This Vite project uses TypeScript and Tailwind CSS and is configured for shadcn/ui. Place shared UI components in `src/components/ui/` (the `@/components/ui` alias), and edit global styles in `src/style.css`. The alias is configured in `vite.config.ts` and `tsconfig.json`; `components.json` provides the shadcn CLI settings. To add a shadcn component, run `npx shadcn@latest add button` from the project root.

## Waitlist submissions

The form is wired to Supabase, but submissions will only be saved after a Supabase project is connected. Copy `.env.example` to `.env` and set the project URL and public publishable key (or legacy anon key):

```env
VITE_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=YOUR_PUBLIC_PUBLISHABLE_KEY
```

Then run `supabase/waitlist.sql` in the Supabase SQL Editor. The policy allows visitors to insert consented registrations but does not allow public reads. To view submissions, sign in to your own Supabase project and open **Table Editor → waitlist**. Do not add the service role key to this frontend project.

Until the project is connected and the table is created, the form explicitly reports that registration is unavailable and does not claim that submissions were saved.
