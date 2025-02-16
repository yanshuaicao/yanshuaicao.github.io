---
layout: page
title: LLM Capabilities & Applications
description: Research on understanding and extending the capabilities of large language models
img: assets/img/llm_pddl.png
importance: 1
category: research
---

This project investigates fundamental questions about LLM capabilities and develops novel applications, focusing on planning, world modeling, and decision-making.

---

## Planning & Reasoning

### PDDL and classical planner as tools for LLMs
<div class="row mt-3">
    <div class="col-sm-6 mx-auto mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/llm_pddl.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

We developed a novel approach that leverages LLMs and environment feedback to automatically generate PDDL domain and problem descriptions without human intervention. Our method achieves a 66% task solve rate compared to 29% with GPT-4's direct planning.

[Publication Details](/publications/#mahdavi2024leveragingenvironmentinteractionautomated){:target="_blank"}

### Do LLMs Build World Representations?
<div class="row mt-3">
    <div class="col-sm-6 mx-auto mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/llm_abstraction.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

We investigate how LLMs encode world state through the lens of state abstraction theory from reinforcement learning. Our findings reveal that fine-tuning strengthens LLMs' tendency to maintain goal-oriented abstractions during decoding.

[Publication Details](/publications/#lillms){:target="_blank"}

### Jump Starting Bandits with LLM Knowledge
<div class="row mt-3">
    <div class="col-sm-6 mx-auto mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/jumpstart.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

We demonstrate how to leverage LLMs' knowledge to jump-start contextual multi-armed bandits, significantly reducing online learning regret. Our method uses LLM-generated synthetic data to initialize bandit models with human-like preferences.

[Publication Details](/publications/#alamdari-etal-2024-jump){:target="_blank"}

---

## Impact

This research advances our understanding and application of LLMs by:
- Enabling automated planning through PDDL translation
- Revealing how LLMs build and use internal world representations
- Leveraging LLM knowledge to improve decision-making systems
- Developing novel evaluation frameworks for LLM capabilities
- Creating practical applications that combine LLMs with classical AI methods

The methods demonstrate how LLMs can be effectively integrated with structured reasoning approaches, leading to more capable and reliable AI systems that combine the strengths of neural and symbolic approaches.