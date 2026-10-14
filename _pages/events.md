---
layout: page
title: Activities
permalink: /activities/
nav: true
nav_order: 4
---

<!-- ## Crypto Seminar Series

We host a weekly seminar on topics in cryptography and related areas.
Talks are held on **Tuesdays at 2:00 PM** in Gates Hall, Room 417,
unless otherwise noted. All are welcome.

--- -->

### Upcoming Activities

{% if site.data.events.upcoming.size > 0 %}

<table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Speaker</th>
      <th scope="col">Title</th>
    </tr>
  </thead>
  <tbody>
  {% for talk in site.data.events.upcoming %}
    <tr>
      <td style="white-space: nowrap;">
        {% if talk.date_to and talk.date_from != talk.date_to %}
          {{ talk.date_from | date: "%b %-d" }} – {{ talk.date_to | date: "%b %-d, %Y" }}
        {% else %}
          {{ talk.date_from | date: "%b %-d, %Y" }}
        {% endif %}
      </td>
      {% if talk.speakers %}
        <td style="min-width: 15rem;">
          {% for sp in talk.speakers %}
            <div class="mb-2">
              {{ sp.name }}
              {% if sp.affiliation %}<br><small class="text-muted">{{ sp.affiliation }}</small>{% endif %}
            </div>
          {% endfor %}
        </td>
      {% else %}
        <td style="white-space: nowrap;">
          {{ talk.speaker }}
          <br><small class="text-muted">{{ talk.affiliation }}</small>
        </td>
      {% endif %}
      <td>
        {%- if talk.abstract != "" and talk.abstract -%}
          <details style="margin:0;padding:0;">
            <summary><strong>{{ talk.title }}</strong></summary>
            <small>{{ talk.abstract | newline_to_br }}</small>
          </details>
        {%- else -%}
          <strong>{{ talk.title }}</strong>
        {%- endif -%}
        {%- if talk.time_from or talk.location %}
          <small class="text-muted d-block">{% if talk.time_from %}{{ talk.time_from }}{% if talk.time_to %} – {{ talk.time_to }}{% endif %}{% endif %}{% if talk.time_from and talk.location %} · {% endif %}{% if talk.location %}{{ talk.location }}{% endif %}</small>
        {%- endif -%}
        {%- if talk.url != "" and talk.url %}
          <br><small><a href="{{ talk.url }}" target="_blank">More info <i class="fas fa-external-link-alt"></i></a></small>
        {%- endif %}
      </td>
    </tr>
  {% endfor %}
  </tbody>
</table>
{% else %}
<p class="text-muted">No upcoming activities scheduled. Check back soon!</p>
{% endif %}

---

### Past Activities

{% if site.data.events.past.size > 0 %}

<table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Speaker</th>
      <th scope="col">Title</th>
      <th scope="col">Resources</th>
    </tr>
  </thead>
  <tbody>
  {% for talk in site.data.events.past %}
    <tr>
      <td style="white-space: nowrap;">
        {% if talk.date_to and talk.date_from != talk.date_to %}
          {{ talk.date_from | date: "%b %-d" }} – {{ talk.date_to | date: "%b %-d, %Y" }}
        {% else %}
          {{ talk.date_from | date: "%b %-d, %Y" }}
        {% endif %}
      </td>
      {% if talk.speakers %}
        <td style="min-width: 15rem;">
          {% for sp in talk.speakers %}
            <div class="mb-2">
              {{ sp.name }}
              {% if sp.affiliation %}<br><small class="text-muted">{{ sp.affiliation }}</small>{% endif %}
            </div>
          {% endfor %}
        </td>
      {% else %}
        <td style="white-space: nowrap;">
          {{ talk.speaker }}
          <br><small class="text-muted">{{ talk.affiliation }}</small>
        </td>
      {% endif %}
      <td>
        {%- if talk.abstract != "" and talk.abstract -%}
          <details style="margin:0;padding:0;">
            <summary><strong>{{ talk.title }}</strong></summary>
            <small>{{ talk.abstract | newline_to_br }}</small>
          </details>
        {%- else -%}
          <strong>{{ talk.title }}</strong>
        {%- endif -%}
        {%- if talk.time_from or talk.location %}
          <small class="text-muted d-block">{% if talk.time_from %}{{ talk.time_from }}{% if talk.time_to %} – {{ talk.time_to }}{% endif %}{% endif %}{% if talk.time_from and talk.location %} · {% endif %}{% if talk.location %}{{ talk.location }}{% endif %}</small>
        {%- endif -%}
      </td>
      <td style="white-space: nowrap;">
        {% assign has_res = false %}
        {% if talk.slides != "" and talk.slides %}{% assign has_res = true %}
          <a href="{{ talk.slides }}" target="_blank"><i class="fas fa-file-pdf"></i> slides</a>
        {% endif %}
        {% if talk.recording != "" and talk.recording %}{% assign has_res = true %}
          <a href="{{ talk.recording }}" target="_blank"><i class="fab fa-youtube"></i> video</a>
        {% endif %}
        {% if talk.url != "" and talk.url %}{% assign has_res = true %}
          <a href="{{ talk.url }}" target="_blank"><i class="fas fa-external-link-alt"></i> More info</a>
        {% endif %}
        {% unless has_res %}
          <small class="text-muted">—</small>
        {% endunless %}
      </td>
    </tr>
  {% endfor %}
  </tbody>
</table>
{% endif %}
