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
upcoming; older ones go to "Past talks", grouped by year (newest first).
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
{%- assign past = past | reverse -%}
{%- assign past_by_year = past | group_by_exp: "t", "t.date | date: '%Y'" %}

<h2 class="seminar-section">Upcoming talks</h2>

{% if upcoming.size > 0 %}
{% for t in upcoming %}
{% include seminar_talk.liquid talk=t %}
{% endfor %}
{% else %}

<p class="text-muted">No upcoming talks scheduled yet. Please check back soon.</p>
{% endif %}

{% if past.size > 0 %}

<h2 class="seminar-section" id="past-talks">Past talks</h2>
{% if past_by_year.size > 1 %}
<p class="seminar-years">{% for y in past_by_year %}<a href="#past-{{ y.name }}">{{ y.name }}</a>{% endfor %}</p>
{% endif %}
{% for y in past_by_year %}
<h3 class="seminar-year" id="past-{{ y.name }}">{{ y.name }}</h3>
{% for t in y.items %}
{% include seminar_talk.liquid talk=t collapse=true %}
{% endfor %}
{% endfor %}
{% endif %}

<style>
  .seminar-section { margin-top: 2rem; margin-bottom: 1rem; }
  .seminar-year { margin-top: 1.75rem; font-size: 1.25rem; color: var(--global-text-color-light); }
  .seminar-years a { margin-right: 0.75rem; }
  .seminar-talk { padding: 1rem 0 1.1rem; border-bottom: 1px solid var(--global-divider-color); }
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
  .seminar-links { margin-top: 0.5rem; font-size: 0.9rem; }
  .seminar-links a { margin-right: 1rem; }
</style>
