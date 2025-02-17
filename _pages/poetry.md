---
layout: page
title: 颜辞
permalink: /poetry/
description: 艳阳风骤起， 云静百帆飞。 入世破千浪， 随波出世归。
nav: true
nav_order: 5
display_categories:
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
  {% assign sorted_poetry = categorized_poetry | sort: "date" | reverse %}
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
{% assign sorted_poetry = site.poetry | sort: "date" | reverse %}

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

<style>
  /* Increase vertical spacing between poem cards */
  .row > .col {
    margin-bottom: 2rem !important;  /* Reduced from 3rem to 2rem */
  }

  /* Ensure consistent spacing for the last row */
  .row:last-child > .col {
    margin-bottom: 1.5rem !important;  /* Reduced from 2rem to 1.5rem */
  }
</style>
