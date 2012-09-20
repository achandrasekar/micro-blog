var defaultCKOptions = {
  resize_enabled : false,
  toolbar : 'Easy',
  toolbar_Easy : [
    ['Bold','Italic','Underline'],
    ['NumberedList','BulletedList','Outdent','Indent','Blockquote'],
    ['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
    ['Table'],
    ['Format'],
    ['Link','Unlink'],
    ['Cut','Copy','Paste','PasteText'],
    ['Source', 'Preview']
  ]
};

var programOverviewCKOptions = {
  toolbar : 'programOverview',
  toolbar_programOverview : [
    ['Bold','Italic','Underline'],
    ['NumberedList','BulletedList','-','Outdent','Indent','Blockquote'],
    ['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
    ['Cut','Copy','Paste','PasteText','PasteFromWord'],
    ['Format','Font','FontSize'],
    ['Undo','Redo','-','SelectAll','RemoveFormat'],
    ['Link','Unlink','Anchor'],
    ['Image','Attachment','Flash','Embed'],
    ['Table','HorizontalRule','SpecialChar','PageBreak'],
    ['Subscript','Superscript','TextColor'],
    ['Source','-','Preview']
  ]
};

var topicCreationCKOptions = {
  toolbar : 'topicCreation',
  toolbar_topicCreation : [
    ['Bold','Italic','Underline','Strike'],
    ['Subscript','Superscript'],
    ['NumberedList','BulletedList','Outdent','Indent','Blockquote']
  ]
};

var emailCKOpions = {
  toolbar : 'emailCustomization',
  toolbar_emailCustomization : [
    ['Bold','Italic','Underline'],
    ['NumberedList','BulletedList','Outdent','Indent','Blockquote'],
    ['Table'],
    ['Format'],
    ['Link','Unlink'],
    ['Paste','PasteText'],
    ['Source','Preview']
  ]
}

ckeditor_configure = function(){

  if(jQuery('#blog_content').length == 1)
  {
    CKEDITOR.replace('blog_content',jQuery.extend(programOverviewCKOptions, {height : "250px", width : "800px"}));
  }

};

  
  jQuery(document).ready(function(){
  ckeditor_configure();
  if(typeof CKEDITOR != 'undefined'){
    CKEDITOR.config.enterMode = CKEDITOR.ENTER_BR;
  }

  //Fix for the attachement issue - https://github.com/galetahub/ckeditor/issues/79
  jQuery("a[_cke_saved_href]").each(function(){
    var url = jQuery(this).attr("_cke_saved_href")
    url = url.replace(/http:\/\//g, "");
    jQuery(this).attr("href", url);
    jQuery(this).attr("target", "_blank");
  })
})