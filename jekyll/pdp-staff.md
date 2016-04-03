---
layout: default
start-modal: onload="openModal('#trash-can-info');"
---


<div id="getting-started" class="modal-container">  
    <div class="modal-header">
        <a href="#" class="modal-close close">×</a>
        <h3><i class="fa fa-home"></i> Getting Started</h3>
    </div>

    <div class="modal-body">
        <p>Select a trash can location to mark it as ready for DPW pickup.</p>
        <a href="#" class="modal-close"><button class="pull-right">Got it!</button></a>
    </div>
</div>


{% include map.html %}



<!--Trash Can Info - modal that will appear when a trash location on the map is click
<div id="trash-can-info" class="modal-container">  
    <div class="modal-header">
        <a href="#" class="modal-close close">×</a>
        <h3><i class="fa fa-map-marker"></i> Details</h3>
    </div>

    <div class="modal-body">
        <ul class="list-icon-group">
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

        <h3>New Pickup Request</h3>
        <form id="new-pickup-form">
            <input type="number" name="bag-number" id="bag-number" placeholder="# of Bags" required>
            <textarea name="comments" id="comments" placeholder="Comments? (Optional)"></textarea>
            <button type="submit" form="new-pickup-form" value="Create" class="pull-right">Create</button>
        </form>

    </div>
</div>
-->