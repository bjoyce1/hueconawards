## Goal
Fold the Schedule page into the Conference page so visitors get conference info and the full two-day schedule in one place, without losing any content.

## Approach: Top-level tabs inside Conference
Right under the Conference hero, add a two-tab switcher:

- **Overview** — existing Conference content (Featured Sessions, Panels grid, panel modal)
- **Schedule** — full Day 1 / Day 2 content moved over from Schedule.tsx (with the inner Day 1/Day 2 sub-tabs preserved)

The Volunteer section and Marblism ribbon stay at the bottom, shared across both tabs (they apply to the whole conference, not a single view).

## Changes

**`src/pages/Conference.tsx`**
- Add Schedule's imports (Accordion, inner Tabs, Calendar/Clock/MapPin/Download icons, `heroSchedule` not needed since we keep Conference hero).
- Inline the `scheduleData` object and the `DaySchedule` sub-component from Schedule.tsx.
- Wrap the existing Featured Sessions + Panels Grid sections in a `<TabsContent value="overview">`, and put the Day 1/Day 2 inner tabs inside `<TabsContent value="schedule">`.
- Add the "Download Event Info (PDF)" button to the Conference hero (currently only on Schedule hero) so it's not lost.
- Merge the SEO description to mention both panels and full schedule; keep `/conference` as the path.
- Support deep-linking from old links via `?tab=schedule` (or hash `#schedule`) — read on mount and set the active tab so `/conference?tab=schedule` lands directly on the schedule view.

**`src/App.tsx`**
- Replace the `/schedule` route with a redirect: `<Route path="/schedule" element={<Navigate to="/conference?tab=schedule" replace />} />` so any existing inbound links still work.
- Remove the `Schedule` import.

**`src/components/Navigation.tsx`**
- Remove the standalone "Schedule" nav item.
- (Optional) keep nothing else — Conference nav item already exists.

**`src/pages/Schedule.tsx`**
- Delete the file.

## Notes
- Both pages already share `MarblismRibbon` and `Footer`; we keep one set on the merged page (using the Conference ribbon copy, since that's the parent page).
- The two PageHeroes are similar; we keep the Conference hero (`heroConference` background, "HUECONA Conference" title) and add the Schedule's PDF download button to it.
- Nothing in `Index.tsx` or other pages currently links to `/schedule` via hard-coded routes that need updating beyond the redirect; the redirect covers external bookmarks and search-engine results.
