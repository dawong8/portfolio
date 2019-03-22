
const $profile = $(".profile-pic");
const $startScreen = $("#invi");

const $item = $(".project-item");
const $project = $(".project-item img");

const projectDesc = {
	flutter: "",

};


function makeThirsty() {
	if ($profile.attr('src') === './public/photo.png') {
		$profile.attr('src', './public/clip.png').css({'margin-top': '120px'});
	} else {
		$profile.attr('src', './public/photo.png').css({'margin-top': '100px'});
	}

    
}



$profile.hover( makeThirsty );

