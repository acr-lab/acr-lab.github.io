---
layout: page
title: Seminar
permalink: /seminar/
description: Research seminar of the ACR Lab
nav: true
nav_order: 5
---

The ACR Seminar features talks on cryptography and related areas by members of the lab and invited guests. Everyone is welcome.
If you would like to give a talk, please [contact us]({{ '/contact/' | relative_url }}).

{%- comment -%}
Talks live in \_data/seminars.yml. Talks dated today or later are listed as
upcoming; older ones go to "Past talks", grouped by academic year
(September to August, newest first), as on the LIP6 ALMASTY seminar page.
"Today" is the date of the last site build (the deploy workflow rebuilds daily).
{%- endcomment -%}
{%- assign today = site.time | date: "%Y%m%d" | plus: 0 -%}
{%- assign upcoming = "" | split: "" -%}
{%- assign past = "" | split: "" -%}
{%- if site.data.seminars.talks -%}
{%- assign all_talks = site.data.seminars.talks | sort: "date" -%}
{%- for t in all_talks -%}
{%- assign d = t.date | date: "%Y%m%d" | plus: 0 -%}
{%- if d >= today -%}
{%- assign upcoming = upcoming | push: t -%}
{%- else -%}
{%- assign past = past | push: t -%}
{%- endif -%}
{%- endfor -%}
{%- endif -%}
{%- assign past = past | reverse %}

{% for series in site.data.seminars.series %}

<h2 class="seminar-section" id="{{ series.name | slugify }}">{{ series.name }}</h2>
{% include seminar_series.liquid series=series today=today %}
{% endfor %}

<h2 class="seminar-section">Upcoming talks</h2>

{% if upcoming.size > 0 %}
{% for t in upcoming %}
{% include seminar_talk.liquid talk=t %}
{% endfor %}
{% else %}

<p class="text-muted">No upcoming talks scheduled yet. Please check back soon.</p>
{% endif %}

{% if past.size > 0 %}
{% assign ay_seq = "" %}
{% for t in past %}
{% assign y = t.date | date: "%Y" | plus: 0 %}
{% assign m = t.date | date: "%m" | plus: 0 %}
{% if m >= 9 %}{% assign ay_start = y %}{% else %}{% assign ay_start = y | minus: 1 %}{% endif %}
{% assign ay_end = ay_start | plus: 1 %}
{% capture ay_seq %}{{ ay_seq }}{{ ay_start }}–{{ ay_end }},{% endcapture %}
{% endfor %}
{% assign ay_per_talk = ay_seq | split: "," %}
{% assign ay_array = ay_per_talk | uniq %}

<h2 class="seminar-section" id="past-talks">Past talks</h2>
{% assign current_ay = "" %}
{% for t in past %}
{% assign ay = ay_per_talk[forloop.index0] %}
{% if ay_array.size > 1 and ay != current_ay %}
{% assign current_ay = ay %}

<h3 class="seminar-ay" id="past-{{ ay | slice: 0, 4 }}">{{ ay }}</h3>
{% endif %}
{% include seminar_talk.liquid talk=t %}
{% endfor %}
{% if ay_array.size > 1 %}

<p class="seminar-years">{% for a in ay_array %}<a href="#past-{{ a | slice: 0, 4 }}">({{ a }})</a>{% endfor %}</p>
{% endif %}
{% endif %}

<style>
  .seminar-section { margin-top: 2rem; margin-bottom: 1rem; }
  .seminar-years { margin-top: 1.5rem; }
  .seminar-years a { margin-right: 0.75rem; }
  .seminar-talk.card { margin-bottom: 1.25rem; border: 1px solid var(--global-divider-color); border-radius: 0.5rem; }
  .seminar-talk .card-body { padding: 1.1rem 1.4rem; }
  .seminar-ay { margin-top: 1.75rem; margin-bottom: 0.9rem; font-size: 1.25rem; color: var(--global-text-color-light); }
  .seminar-meta { font-size: 0.9rem; color: var(--global-text-color-light); margin-bottom: 0.35rem; }
  .seminar-date { font-weight: 600; color: var(--global-theme-color); }
  .seminar-type {
    display: inline-block; margin-left: 0.4rem; padding: 0 0.45rem; border-radius: 0.25rem;
    font-size: 0.75rem; border: 1px solid var(--global-theme-color); color: var(--global-theme-color);
  }
  .seminar-speaker { font-size: 1.1rem; font-weight: 600; }
  .seminar-affiliation { font-weight: 400; color: var(--global-text-color-light); }
  .seminar-title { font-size: 1.05rem; font-style: italic; margin-top: 0.15rem; }
  .seminar-abstract { margin-top: 0.6rem; font-size: 0.95rem; }
  .seminar-abstract p:last-child { margin-bottom: 0; }
  details.seminar-abstract summary { cursor: pointer; color: var(--global-theme-color); font-size: 0.9rem; }
  details.seminar-abstract[open] summary { margin-bottom: 0.4rem; }
  .seminar-bio { margin-top: 0.75rem; padding-top: 0.6rem; border-top: 1px dashed var(--global-divider-color); font-size: 0.9rem; }
  .seminar-bio-label { font-weight: 600; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.04em; color: var(--global-text-color-light); margin-bottom: 0.2rem; }
  .seminar-series-speaker { margin-top: 0.15rem; color: var(--global-text-color-light); }
  .seminar-sessions { margin-top: 0.75rem; display: flex; flex-wrap: wrap; align-items: center; gap: 0.35rem; font-size: 0.8rem; }
  .seminar-sessions-label { font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; color: var(--global-text-color-light); margin-right: 0.25rem; }
  .seminar-session { padding: 0.05rem 0.5rem; border: 1px solid var(--global-divider-color); border-radius: 0.25rem; white-space: nowrap; }
  .seminar-session.past { opacity: 0.5; text-decoration: line-through; }
  .seminar-session.next { border-color: var(--global-theme-color); color: var(--global-theme-color); font-weight: 600; }
  .seminar-links { margin-top: 0.5rem; font-size: 0.9rem; }
  .seminar-links a { margin-right: 1rem; }
</style>
