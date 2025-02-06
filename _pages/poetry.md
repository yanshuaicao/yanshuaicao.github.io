---
layout: page
title: poetry
permalink: /poetry/
description: A growing collection of my poetry.
nav: true
nav_order: 3
display_categories: []
horizontal: false
---

<!-- pages/poetry.md -->
<div class="poetry">
{% if site.enable_poetry_categories and page.display_categories %}
  <!-- Display categorized poetry -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_poetry = site.poetry | where: "category", category %}
  {% assign sorted_poetry = categorized_poetry | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for poem in sorted_poetry %}
      {% include poems_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for poem in sorted_poetry %}
      {% include poems.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display poetry without categories -->

{% assign sorted_poetry = site.poetry | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for poem in sorted_poetry %}
      {% include poems_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for poem in sorted_poetry %}
      {% include poems.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
