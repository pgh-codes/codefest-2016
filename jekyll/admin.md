---
layout: default
---

{% include map.html %}

<a href="#"><button class="large overlay" onclick="openModal('#manage-team');"><i class="fa fa-users"></i></button></a>


<div id="manage-team" class="modal-container">  
    <div class="modal-header">
        <a href="#" class="modal-close close">×</a>
        <h3><i class="fa fa-filter"></i> Filter Route</h3>
    </div>

    <div class="modal-body">
        <form id="create-route-form">
            <label for="filter-bags">How many bags can be pick up?</label>
            <input type="range" name="filter-bags" id="filter-bags" min="10" value="1" max="60" step="1" oninput="outputUpdate(value)" class="pull-left" required>
            <output for="filter-bags" id="bags" class="pull-right">1 bag</output>
            <div class="clearfix">&nbsp;</div>
            
            <label for="filter-time">How long should this route take?</label>
            <input type="range" name="filter-time" id="filter-time" min="10" value="10" max="60" step="10" oninput="outputUpdate(value)" class="pull-left" required>
            <output for="filter-time" id="minutes" class="pull-right">10 min.</output>
            <div class="clearfix">&nbsp;</div>
            
            <script>
                function outputUpdate(min) {
                    document.querySelector('#minutes').value = min + ' min.';
                }
                
                function outputUpdate(bags) {
                    document.querySelector('#bags').value = bags + ' bags';
                }
            </script>
            
            <a href="#" class="modal-close"><button value="Go!" class="pull-right">Go!</button></a>
        </form>
    </div>    
</div>