---
layout: default
---

{% include map.html %}

<div class="btn-group">

    <a href="#"><button class="large manage-team-btn"><i class="fa fa-users"></i></button></a>
    
    <a href="#"><button class="large middle manage-trash-cans-btn"><i class="fa fa-trash"></i></button></a>
    
    <a href="#"><button class="large export-data-btn"><i class="fa fa-bar-chart"></i></button></a>
    
</div>

<!-- Manage Teams -->
<div id="manage-team" class="slide-container transition">
    <div class="slide-header">
        <a href="#" class="close">×</a>
        <h3><i class="fa fa-users"></i> Manage Team</h3>
    </div>

    <div class="slide-body">
        Manage Team   
    </div>
</div>

<!--  Manage Cans -->
<div id="manage-trash-cans" class="slide-container transition">
    <div class="slide-header">
        <a href="#" class="close">×</a>
        <h3><i class="fa fa-trash"></i> Manage Trash Cans</h3>
    </div>

    <div class="slide-body">
        Manage Trash Cans
    </div>    
</div>

<!-- Export Data -->
<div id="export-data" class="slide-container transition">
    <div class="slide-header">
        <a href="#" class="close">×</a>
        <h3><i class="fa fa-bar-chart"></i> Export Data</h3>
    </div>

    <div class="slide-body">
        Export Data
    </div>    
</div>
<script src="{{ site.url }}/assets/js/slideScreens.js"></script>