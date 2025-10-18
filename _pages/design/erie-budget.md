---
title: "Erie 2026 Budget Explorer"
permalink: /design/erie2026budget
author_profile: false
topImg: false
---

# Erie 2026 Proposed Budget Redesigns

⚠️ I’m not affiliated with the Town of Erie—I just live here. After trying to understand the town’s budget, I realized how difficult it was to see where money was going and how it was changing year to year. Since I have a background in data visualization, I decided to redesign a few of the charts to make the information easier to reason about.  
{: .notice--info}


## 💰 Budget by Department Redesign

The current [budget visualization](https://town-erie-co-cleardoc.cleargov.com/19263/764701/d#:~:text=FY26%20Expenditures%20by%20Department) uses a pie chart (for FY 2026) and stacked bars (for prior years). While those formats show the overall distribution, large departments dominate the view, making smaller categories—and year-to-year changes—hard to see.  

Range plots make those relationships clearer. They let viewers compare each department side-by-side and immediately grasp how the proposed 2026 budget shifts relative to 2025. Instead of being overwhelmed by total size, the focus moves to *change*, which better supports interpretation and conversation around budget priorities.

<iframe title="Town of Erie 2026 Proposed Budget (by Department)" aria-label="Range Plot" id="datawrapper-chart-spXiU" src="https://datawrapper.dwcdn.net/spXiU/6/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="464" data-external="1"></iframe><script type="text/javascript">window.addEventListener("message",function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r,i=0;r=e[i];i++)if(r.contentWindow===a.source){var d=a.data["datawrapper-height"][t]+"px";r.style.height=d}}});</script>

## 💰 Budget By Expenditure Redesigns

Just like the “By Department” chart, the expenditure view benefits from a focus on *change* rather than *total size*. This version shows how each major spending category shifts from FY 2025 (Adopted) to FY 2026 (Proposed). Seeing growth and reduction side-by-side makes it easier to interpret where spending is expanding, contracting, or staying relatively stable.

<iframe title="Town of Erie 2026 Proposed Budget (by Expenditure Category)" aria-label="Range Plot" id="datawrapper-chart-5h5vy" src="https://datawrapper.dwcdn.net/5h5vy/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="428" data-external="1"></iframe><script type="text/javascript">window.addEventListener("message",function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r,i=0;r=e[i];i++)if(r.contentWindow===a.source){var d=a.data["datawrapper-height"][t]+"px";r.style.height=d}}});</script>

### Expenditures by Object Redesign

The `Expenditures by Object` section of the official proposal was [especially difficult to interpret](https://bsky.app/profile/did:plc:sx3cp5sibnzv3dza7jloomqb/post/3m3gc2uwfvc2a)—it used a color-coded chart with over 180 categories 😱. In this redesign, I replaced that with an **interactive table**, which lets readers *search, sort, and explore* specific items on their own.

Try sorting by column headers or searching for a term like `Salaries`. The `2026 Proposed` column is color-scaled by expenditure quintile, helping highlight which categories represent the largest portions of spending.

<iframe title="Town of Erie 2026 Proposed Budget (by Category)" aria-label="Table" id="datawrapper-chart-Yd3Yq" src="https://datawrapper.dwcdn.net/Yd3Yq/3/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="2408" data-external="1"></iframe><script type="text/javascript">window.addEventListener("message",function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r,i=0;r=e[i];i++)if(r.contentWindow===a.source){var d=a.data["datawrapper-height"][t]+"px";r.style.height=d}}});</script>





