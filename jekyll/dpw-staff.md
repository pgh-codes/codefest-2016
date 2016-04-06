---
layout: default
---

{% include map.html %}

<a href="#"><button class="large overlay" onclick="openModal('#filter-route');">Create Route</button></a>

<div id="filter-route" class="modal-container">  
    <div class="modal-header">
        <a href="#" class="modal-close close">×</a>
        <h3><i class="fa fa-filter"></i> Filter Route</h3>
    </div>

    <div class="modal-body">
        <form id="create-route-form">
            <label for="filter-bags">How many bags can be pick up?</label>
            <input type="range" name="filter-bags" id="filter-bags" oninput="outputUpdate(value, '#bags', ' bags')" min="5" value="5" max="60" step="1" class="pull-left">
            <output for="filter-bags" id="bags" class="pull-right">5 bags</output>
            <br><br>
            <label for="filter-time">How long should this route take?</label>
            <input type="range" name="filter-time" id="filter-time" oninput="outputUpdate(value, '#minutes', ' mins.')" min="10" value="10" max="60" step="10"  class="pull-left">
            <output for="filter-time" id="minutes" class="pull-right">10 mins.</output>
            
            <script>
                function outputUpdate(value, id, suffix) {
                  document.querySelector(id).value = value + suffix;
                }
            </script>
            
            <a href="#" class="modal-close"><button value="Go!" class="pull-right">Go!</button></a>
        </form>
    </div>    
</div>


<!--Trash Can Info - modal that will appear when a trash location on the map is click-->
<!--
<div id="trash-can-info" class="modal-container">  
    <div class="modal-header">
        <a href="#" class="modal-close close">×</a>
        <h3><i class="fa fa-map-marker"></i> Details</h3>
    </div>

    <div class="modal-body">
        <ul class="list-icon-group">
            <li><i class="fa fa-hashtag"></i> Bags at Location: </li>
            <li><i class="fa fa-clock-o"></i> Last Pickup: 00:00 PM</li>
            <li><i class="fa fa-info-circle"></i> 
                Features:&nbsp;&nbsp;
                <span class="can-types">
                <i class="fa fa-certificate on"></i>
                <i class="fa fa-recycle"></i>
                <i class="fa fa-fire on"></i>
                <i class="fa fa-trash gray"><span class="sml-txt">G</span></i>
                <i class="fa fa-trash black on"><span class="sml-txt">B</span></i>
                </span>
            </li>
            <li><i class="fa fa-comment"></i> Recent Comments
                <ul class="recent-comments">
                    <li>Comment here <span class="sml-txt">(Apr 1, 2016)</span></li>
                    <li>Comment here <span class="sml-txt">(Mar 11, 2016)</span></li>
                    <li>Comment here <span class="sml-txt">(Dec 20, 2015)</span></li>
                </ul>
            </li>
        </ul>

        <hr>

        <form id="bag-collected-form">
            <button type="submit" form="bag-collected-form" value="Mark Bag as Collected" class="full-width">Mark Bag as Collected</button>
        </form>

    </div>
</div>
-->
