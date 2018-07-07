function checkScreenSideBar(){
 if(window.innerWidth<800)
  {//alert("small screen");
   $('#mysidebar').addClass('mobilesidebar');
   $('#mysidebar').removeClass('largesidebar');
   $('#primary').addClass('primarysmall');
   $('#primary').removeClass('primarylarge');
   $('#mysidebar').hide();
   var content=$('#mysidebar').html();
   $('#themobilesidebar').html(content);
  }
 else
  {//alert("everything alright");
   $('#mysidebar').addClass('largesidebar');
   $('#mysidebar').removeClass('mobilesidebar');
   $('#primary').removeClass('primarysmall');
   $('#primary').addClass('primarylarge');
   $('#themobilesidebar').hide(content);
   $('#mysidebar').show();
  }
}

function loadSidebar(){
 var c=`<div id="mockupsidebar">
        <p><input type="text" placeholder="Search">
        <i class="glyphicon glyphicon-search"></i></p>
        <h1>Recent Posts</h1>
        <ul>
          <li><a href="#">sample 1</a></li>
          <li><a href="#">sample 2</a></li>
          <li><a href="#">sample 3</a></li>
        </ul>
        </div>
       `;
  $('#mysidebar').html(c);

}

function initPage(){
 loadSidebar();
 checkScreenSideBar();
 showPosts();
}

function showPosts(){
 var w='<div class="col-lg-4 col-md-6 col-sm-12 blogpost">';
 var posts=[];

 AllPosts.map(function(x){var c=w+x+'</div>';
                          posts.push(c); 
                         });

 $('#main').html(posts.join(''));
}


