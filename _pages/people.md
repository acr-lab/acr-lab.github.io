---
layout: page
title: people
permalink: /people/
description: people in the lab.
nav: true
nav_order: 2
---

{% assign roles = "advisor|director|researcher|postdoc|phd|masters|undergrad" | split: "|" %}
{% assign role_names = "Scientific Council|Director|Researchers|Postdoctoral Fellows|PhD Students|Masters Students|Undergraduate Researchers" | split: "|" %}

{% for role in roles %}
  {% assign members = site.people | where: "role", role | sort: "order" %}
  {% if members.size > 0 %}

### {{ role_names[forloop.index0] }}

<div class="row row-cols-1 row-cols-md-2 g-4 mb-5">
  {% for person in members %}
  <div class="col" style="margin-bottom: 1.5rem;">
    <div class="card h-100" style="cursor: pointer;" data-bs-toggle="modal" data-bs-target="#modal-{{ person.name | slugify }}">
      {% assign placeholder = '/assets/img/people/placeholder.svg' | relative_url %}
      <div class="card-body d-flex align-items-center">
        <div style="flex-shrink: 0; margin-right: 1rem;">
          {% if person.image %}
            <img src="{{ '/assets/img/people/' | append: person.image | relative_url }}"
                 class="rounded-circle"
                 alt="{{ person.name }}"
                 style="width: 120px; height: 120px; object-fit: cover;"
                 onerror="this.onerror=null;this.src='{{ placeholder }}';">
          {% else %}
            <img src="{{ placeholder }}"
                 class="rounded-circle"
                 alt="{{ person.name }}"
                 style="width: 120px; height: 120px; object-fit: cover;">
          {% endif %}
        </div>
        <div>
            <h5 class="card-title mb-1">{{ person.name }}</h5>
            <p class="card-text"><small class="text-muted">{{ person.bio }}</small></p>
            {% if person.interests %}
              <p class="card-text">
                {% for interest in person.interests %}
                  <span class="badge bg-secondary">{{ interest }}</span>
                {% endfor %}
              </p>
            {% endif %}
            <p class="card-text">
              {% if person.email %}
                <a href="mailto:{{ person.email }}" onclick="event.stopPropagation();"><i class="fas fa-envelope"></i></a>
              {% endif %}
              {% if person.scholar %}
                <a href="{{ person.scholar }}" target="_blank" onclick="event.stopPropagation();"><i class="ai ai-google-scholar"></i></a>
              {% endif %}
              {% if person.github %}
                <a href="https://github.com/{{ person.github }}" target="_blank" onclick="event.stopPropagation();"><i class="fab fa-github"></i></a>
              {% endif %}
              {% if person.website %}
                <a href="{{ person.website }}" target="_blank" onclick="event.stopPropagation();"><i class="fas fa-globe"></i></a>
              {% endif %}
            </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div class="modal fade" id="modal-{{ person.name | slugify }}" tabindex="-1" aria-labelledby="label-{{ person.name | slugify }}" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="label-{{ person.name | slugify }}">{{ person.name }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-4 text-center mb-3">
              {% if person.image %}
                <img src="{{ '/assets/img/people/' | append: person.image | relative_url }}"
                     class="img-fluid rounded"
                     alt="{{ person.name }}"
                     onerror="this.onerror=null;this.src='{{ placeholder }}';">
              {% else %}
                <img src="{{ placeholder }}"
                     class="img-fluid rounded"
                     alt="{{ person.name }}">
              {% endif %}
              <div class="mt-3">
                {% if person.email %}
                  <a href="mailto:{{ person.email }}"><i class="fas fa-envelope fa-lg"></i></a>
                {% endif %}
                {% if person.scholar %}
                  <a href="{{ person.scholar }}" target="_blank"><i class="ai ai-google-scholar fa-lg"></i></a>
                {% endif %}
                {% if person.github %}
                  <a href="https://github.com/{{ person.github }}" target="_blank"><i class="fab fa-github fa-lg"></i></a>
                {% endif %}
                {% if person.website %}
                  <a href="{{ person.website }}" target="_blank"><i class="fas fa-globe fa-lg"></i></a>
                {% endif %}
              </div>
            </div>
            <div class="col-md-8">
              {% if person.interests %}
                <p>
                  {% for interest in person.interests %}
                    <span class="badge bg-secondary">{{ interest }}</span>
                  {% endfor %}
                </p>
              {% endif %}
              {{ person.content }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {% endfor %}
</div>
  {% endif %}
{% endfor %}

<!-- Alumni section -->
{% assign alumni = site.people | where: "role", "alumni" | sort: "year_graduated" | reverse %}
{% if alumni.size > 0 %}

### Alumni

<table class="table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Year</th>
      <th>Now at</th>
    </tr>
  </thead>
  <tbody>
  {% for person in alumni %}
    <tr>
      <td>{{ person.name }}</td>
      <td>{{ person.year_graduated }}</td>
      <td>{{ person.position_after }}</td>
    </tr>
  {% endfor %}
  </tbody>
</table>
{% endif %}