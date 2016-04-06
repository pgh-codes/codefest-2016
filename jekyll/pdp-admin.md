---
layout: default
---

{% include map.html %}

<div class="btn-group">

    <a href="#"><button class="large view-team-btn"><i class="fa fa-users"></i></button></a>
    
    <a href="#"><button class="large middle add-team-btn"><i class="fa fa-user-plus"></i></button></a>
    
    <a href="#"><button class="large export-data-btn"><i class="fa fa-bar-chart"></i></button></a>
    
</div>

<!-- Manage Teams -->
<div id="view-team" class="slide-container transition">
    <div class="slide-header">
        <h2 class="pull-left"><i class="fa fa-users"></i> Team Directory</h2>
        <a href="#" class="close pull-right">×</a>
        <div class="clearfix"></div>
    </div>

    <div class="slide-body">
        <ul class="list-names">
            <li><a href="#" class="team-info-btn">John Doe</a></li>
            <li><a href="#">Bobby Smith</a></li>
            <li><a href="#">Amy DePalma</a></li>
            <li><a href="#">Matthew Cipperly</a></li>
            <li><a href="#">Robert Collini</a></li>
            <li><a href="#">John Doe</a></li>
            <li><a href="#">Bobby Smith</a></li>
            <li><a href="#">Amy DePalma</a></li>
            <li><a href="#">Matthew Cipperly</a></li>
            <li><a href="#">Robert Collini</a></li>
        </ul>

        View Team Directory (View team member stats (avg, cycle times, avg. bags emptied per shift), delete members, update members)
    </div>
</div>

<!-- Team Info -->
<div id="team-info" class="slide-container transition">
    <div class="slide-header">
        <h2 class="pull-left"><i class="fa fa-user"></i> John Doe</h2>
        <a href="#" class="close pull-right">×</a>
        <div class="clearfix"></div>
    </div>

    <div class="slide-body">
    
        <ul class="list-icon-group">
            <li><i class="fa fa-clock-o"></i> Avg. Cycle Time: <span class="highlight">#### mins.</span></li>
            <li><i class="fa fa-trash"></i> Avg. Cans Emptied Per Shift: <span class="highlight">###</span></li>
        </ul>

        <a href="#" class="pull-right"><button class="warning"><i class="fa fa-times"></i> Delete</button></a><a href="#" class="pull-right edit-member-btn"><button><i class="fa fa-pencil-square-o"></i> Edit</button></a> 

    </div>
</div>

<!-- Edit Member -->
<div id="edit-member" class="slide-container transition">
    <div class="slide-header">
        <h2 class="pull-left"><i class="fa fa-pencil-square-o"></i> Edit Team Member Info</h2>
        <a href="#" class="close pull-right">×</a>
        <div class="clearfix"></div>
    </div>

    <div class="slide-body">
        <h2>John Doe</h2>
            
            <form>
                <label for="name">Update Name</label>
                <input class="required-field" type="text" name="name" id="password" placeholder="John Doe">
                <br><br>
                <a href="#"><button name="reset" class="secondary">Reset Password</button></a>
                <br><br>
                <a href="#" class="pull-right"><button class="warning"><i class="fa fa-times"></i> Delete</button></a><a href="#" class="pull-right"><button><i class="fa fa-check"></i> Submit</button></a>
            </form>
    </div>
</div>

<!--  Add Team Members -->
<div id="add-team" class="slide-container transition">
    <div class="slide-header">
        <h2 class="pull-left"><i class="fa fa-user-plus"></i> Add Team Member</h2>
        <a href="#" class="close pull-right">×</a>
        <div class="clearfix"></div>
    </div>

    <div class="slide-body">
    Add a New Team Member (Add name and agency info (PDP or DPW)
    </div>    
</div>

<!-- Export Data -->
<div id="export-data" class="slide-container transition">
    <div class="slide-header">
        <h2 class="pull-left"><i class="fa fa-bar-chart"></i> Export Data</h2>
        <a href="#" class="close pull-right">×</a>
        <div class="clearfix"></div>
    </div>

    <div class="slide-body">
        Export the stat info above into a .CSV file.<br>
Additional sorting by fields (can type, date/date range)
    </div>    
</div>
<script src="{{ site.url }}/assets/js/slideScreens.js"></script>