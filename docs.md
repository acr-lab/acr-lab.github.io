# Content Update Guide

This guide explains how to add and update content on the ACR Lab website.

---

## Table of Contents

- [Adding People](#adding-people)
- [Adding News](#adding-news)
- [Adding Publications](#adding-publications)
- [Adding Events](#adding-events)

---

## Adding People

People are stored as individual Markdown files in the `_people/` directory.

### Create a new file

Create `_people/firstname_lastname.md` with the following structure:

```markdown
---
name: Dr. Jane Smith
role: researcher
image: jane-smith.jpg
email: jane@university.edu
website: https://janesmith.com
scholar: https://scholar.google.com/citations?user=XXXXX
github: janesmith
bio: >
  Jane Smith is a researcher at ACR Lab.
  She received her PhD from MIT in 2023.
interests:
  - Post-Quantum Cryptography
  - Lattice Problems
order: 1
---

Optional additional content in Markdown goes here.
This appears in the person's detail modal.
```

### Frontmatter fields

| Field | Required | Description |
|-------|----------|-------------|
| `name` | Yes | Full name (include title if applicable) |
| `role` | Yes | One of: `advisor`, `director`, `researcher`, `postdoc`, `phd`, `masters`, `undergrad`, `alumni` |
| `image` | Yes | Filename of photo placed in `assets/img/people/` |
| `email` | No | Email address (generates a mailto link) |
| `website` | No | Personal website URL |
| `scholar` | No | Google Scholar profile URL |
| `github` | No | GitHub username (not the full URL) |
| `bio` | No | Short biography displayed on the card |
| `interests` | No | List of research interests (shown as badges) |
| `order` | No | Display order within the role group (ascending) |
| `year_graduated` | Alumni only | Year they left the lab |
| `position_after` | Alumni only | Current position/employer |

### Profile image

Place the image file in `assets/img/people/` and reference only the filename in the `image` field.

### Display behavior

- People are grouped by role in this order: Advisor, Director, Researchers, Postdocs, PhD Students, Masters, Undergrads
- Within each group, people are sorted by the `order` field
- Alumni appear in a separate table at the bottom

---

## Adding News

News items are stored as Markdown files in the `_news/` directory. They appear on the News page and optionally on the homepage.

### Create a new file

Create `_news/announcement_N.md` (or any descriptive filename):

```markdown
---
layout: post
date: 2026-03-15
inline: true
related_posts: false
---

Our paper on post-quantum signatures was accepted at CRYPTO 2026!
```

### Frontmatter fields

| Field | Required | Description |
|-------|----------|-------------|
| `layout` | Yes | Always `post` |
| `date` | Yes | Publication date in `YYYY-MM-DD` format |
| `inline` | Yes | `true`: content displays directly in the news list. `false`: title becomes a link to a full post page |
| `related_posts` | No | `true`/`false` - show related posts at the bottom of the full post |

### Inline vs. full post

- **Inline (`inline: true`)**: Best for short announcements (1-2 sentences). Content appears directly in the news list.
- **Full post (`inline: false`)**: Best for longer announcements. The title links to a dedicated page where the full content is displayed.

### Display behavior

- News items are sorted by date (newest first)
- The homepage announcements section shows the most recent items (configurable via `_pages/about.md` frontmatter)

---

## Adding Publications

Publications are managed through a single BibTeX file at `_bibliography/papers.bib`.

### Add a new entry

Append a BibTeX entry to `_bibliography/papers.bib`:

```bibtex
@inproceedings{AuthorYear,
  author    = {Jane Smith and
               John Doe and
               Alice Johnson},
  title     = {A Novel Approach to Post-Quantum Key Exchange},
  booktitle = {Advances in Cryptology - CRYPTO 2026},
  series    = {Lecture Notes in Computer Science},
  volume    = {12345},
  pages     = {100--130},
  publisher = {Springer},
  year      = {2026},
  url       = {https://doi.org/10.1007/xxx},
  doi       = {10.1007/xxx},
}
```

### Common entry types

| Type | Use for |
|------|---------|
| `@article` | Journal papers |
| `@inproceedings` | Conference papers |
| `@phdthesis` | PhD dissertations |
| `@misc` | Preprints, technical reports |

### Standard BibTeX fields

| Field | Description |
|-------|-------------|
| `author` | Author names separated by `and` |
| `title` | Paper title |
| `journal` | Journal name (for `@article`) |
| `booktitle` | Conference name (for `@inproceedings`) |
| `year` | Publication year |
| `pages` | Page range (e.g., `100--130`) |
| `url` | Link to the paper |
| `doi` | Digital Object Identifier |

### Optional enhanced fields

These fields add extra features to the publication entry on the website:

| Field | Description |
|-------|-------------|
| `abbr` | Short conference/journal abbreviation (e.g., `CRYPTO`) |
| `abstract` | Paper abstract |
| `pdf` | Path or URL to PDF file |
| `slides` | Path or URL to presentation slides |
| `video` | URL to video presentation |
| `code` | URL to source code repository |
| `selected` | Set to `true` to feature in selected papers |
| `award` | Set to `true` to highlight as award winner |
| `award_name` | Name of the award (e.g., `Best Paper`) |
| `arxiv` | arXiv identifier (e.g., `2026.12345`) |
| `preview` | Path to a thumbnail image |
| `bibtex_show` | Set to `true` to show a BibTeX button |

### Display behavior

- Publications are grouped by year (descending)
- Rendered using APA citation style
- A search bar allows filtering publications
- At most 3 authors are shown by default (click to expand)

---

## Adding Events

Events are managed through a single YAML file at `_data/events.yml`. The file has two sections: `upcoming` and `past`.

### Add an upcoming event

Add an entry under the `upcoming` key in `_data/events.yml`:

```yaml
upcoming:
  - title: "Post-Quantum Cryptography in Practice"
    speaker: "Dr. Jane Smith"
    affiliation: "ETH Zurich"
    date: 2026-04-15
    time: "14:00"
    location: "Gates Hall, Room 417"
    abstract: "We discuss recent advances in deploying lattice-based schemes."
    url: ""
```

### Move an event to past

When an event has taken place, move it from `upcoming` to `past` and replace `abstract`/`url` with `slides`/`recording`:

```yaml
past:
  - title: "Post-Quantum Cryptography in Practice"
    speaker: "Dr. Jane Smith"
    affiliation: "ETH Zurich"
    date: 2026-04-15
    time: "14:00"
    location: "Gates Hall, Room 417"
    slides: "/assets/slides/smith-pqc.pdf"
    recording: "https://youtube.com/watch?v=example"
```

### Event fields

**Upcoming events:**

| Field | Required | Description |
|-------|----------|-------------|
| `title` | Yes | Talk/seminar title |
| `speaker` | Yes | Speaker's name |
| `affiliation` | Yes | Speaker's institution |
| `date` | Yes | Event date in `YYYY-MM-DD` format |
| `time` | Yes | Start time in 24-hour format (e.g., `"14:00"`) |
| `location` | Yes | Physical location |
| `abstract` | No | Talk description (use `""` if none) |
| `url` | No | Link to event page (use `""` if none) |

**Past events:**

| Field | Required | Description |
|-------|----------|-------------|
| `title` | Yes | Talk/seminar title |
| `speaker` | Yes | Speaker's name |
| `affiliation` | Yes | Speaker's institution |
| `date` | Yes | Event date in `YYYY-MM-DD` format |
| `time` | Yes | Start time |
| `location` | Yes | Physical location |
| `slides` | No | URL to slides PDF (use `""` if none) |
| `recording` | No | URL to video recording (use `""` if none) |

### Uploading slides

Place slide PDFs in `assets/slides/` and reference them as `/assets/slides/filename.pdf`.

### Display behavior

- Upcoming and past events are shown in separate tables
- Dates are formatted as "Apr 15, 2026"
- If there are no upcoming events, a "No upcoming talks scheduled" message is shown
- Past events show download links for slides and recordings when available
