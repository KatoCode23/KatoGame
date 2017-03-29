var app = angular.module('app', []);

app.controller('myController', function($scope){
$scope.currentCategory = {name: "none"};
$scope.currentTeam = {name: "none"};
var numberOfImages= 45;
var currentImage= null;
var indexOfLogoImages = 228;
var indexOfPressImages = 513;
//$scope.imageIndexArr = [];
//for (i = 1; i <= 31; i++) {
  //$scope.imageIndexArr.push(i);
//}
//window.$scope = $scope;

$scope.categoryList = [
  {
    name: 'about',
      talent: [
        {
          name: 'Meet Noel',
          link: 'meetNoel.html'
        },
        {
          name: 'Meet the Team',
          link: 'meetTeam.html'
        }
      ]
  },
  {
   name: 'skills',
   link: 'skills.html'
  },
  {
   name: 'events',
    talent: [
        {
          name: 'Event Services',
          link: 'services.html'
        }
      ]
 },
 {
   name: 'gratitude',
    talent: [
      {
        name: 'testimonials',
        link: 'gratitude.html'
      },
      {
        name: 'clientele',
        link: 'clientele.html'
      }
    ]
 },
 {
   name: 'gallery',
   link: 'gallery.html'
 },
 {
   name: 'favorite things',
   link: 'favorite.html'
 },
 {
   name: 'contact',
   link: 'contact.html'
 }
];

$scope.testimonialGallery = [
    {
      name: 'Kris Carr',
      title: 'New York Times best Selling Author',
      image: 'NoelPuck/testimonial0.jpg',
      description: 'Working with Noel is a dream come true! Shes an impeccable event producer whos detail oriented, supportive, and forward thinking. When I work with Noel, Im able to focus on what matters most, delivering my message. She takes care of the rest!'
    },
    {
      name: 'Latham Thomas',
      title: 'Speaker, Author, & Founder of Mama Glow',
      image: 'NoelPuck/testimonial1.png',
      description: 'Noel Elie is the goddess of masterful organization and thoughtful execution. She pays such incredible attention to detail and has a remarkable way of keeping her cool regardless of the circumstances. She seeks to truly understand the needs of her client and delivers above and beyond the call of duty. She is a delightful spirit, a strategist, and forward thinking. Her peculiar talent for anticipating her clients needs is unparalleled. Noel & her team worked the launch of my book party sponsored by Morgan Stanley and Rebecca Minkoff and the night was incredible thanks to her meticulous care. Noel also produced a fundraiser for me that was a huge success!'
    },
    {
      name: 'Patricia Moreno',
      title: 'Best Selling Author, Speaker, & Founder of IntenSATI',
      image: 'NoelPuck/testimonial2.jpg',
      description: 'Its such a pleasure to get to work with Noel & her team. Create Your Dream Year was a great success and we couldnt have done it without her! She is professional, creative, and passionate about what she does making what could be a stressful experience, quite a pleasure!'
    },
    {
      name: 'Meggan Watterson',
      title: 'Best Selling Author, Speaker, & Founder of REVEAL',
      image: 'NoelPuck/testimonial5.jpg',
      description: 'Noel is an angel & an organizational ninja all rolled into one beautiful package. She is so masterful at creating the flow of an event that I am left to do what I do best without being distracted by the details that used to overwhelm me. If you are looking to create a flawless event, big or small, look no further! Noel Elie Productions is it!'
    },
    {
      name: 'Terri Cole',
      title: 'LCSW Licensed Psychotherapist, Speaker, and Transformation Coach',
      image: 'NoelPuck/testimonial3.png',
      description: 'Noel makes me feel so entirely provided for! I never worried once during any of my events. She took care of absolutely every detail which allowed me to just be fully present and entirely there, a rare and invaluable gift.'
    },
    {
      name: 'Joel Readence',
      title: 'Lifecoach',
      image: 'NoelPuck/testimonial4.jpg',
      description: 'Working a full time job and growing a coaching practice allowed me ZERO time to plan and execute a charity fundraiser for 250+ people. Hiring Noel was the best possible thing I could have done! Her in depth knowledge of event planning and execution, ability to negotiate contracts and pricing, target and enlist sponsors, and utilize her extensive network of connections ensured a VERY successful event and a new fundraising record for my charity fund! Whether it be a book launch, a fundraiser, or a client retreat, I will never have another event without Noels involvement.'
    }
];

$scope.teamGallery = [
  {
    name: 'Lisa Barner',
    title: 'Event/ Retreat Coordinator, Brand Consultant, Freelance Writer, Story Teller, & Counselor',
    image: 'NoelPuck/101.jpg',
    description: 'Lisa is a true Jill of All Trades and has been a monumental part of Noel Elie Productions team. She also is an author, has an MS in Counseling, Bereavement group facilitator, Holistic Counselor and Healer. Lisa works with clients as they explore their true essence through practices of self-love, mindfulness and meditation. She has inspired many through her soulful words and writings where her compassion and nurturance can be felt. Her greatest passion is helping others recognize their greatest potential and fullest existence. '
  },
  {
    name: 'Christina Schrieder',
    title: ' Events Manager',
    image: 'NoelPuck/102.jpg',
    description: 'Christina has been assisting Noel Elie Productions for 4+ years. Whether she is planning weddings, coordinating events, overseeing customer relations, or brand management --theres not much this friendly face cant do! She previously managed events for several years at NYIT in NYC.'
  },
  {
    name: 'Kalen Norton',
    title: 'Web Developer and Fitness Professional',
    image: 'NoelPuck/100.jpg',
    description: 'Kalen is a web developer and fitness professional! As a web developer he is proficient in HTML, CSS, JavaScript, and Agular 1. As a fitness specialist, he is the owner and founder of "KatoFitness".'
  }
];

$scope.press = [
  {
    name: 'Bio-Mat',
    link: 'http://noel.biomatnetwork.com/default/',
    image: 'NoelPuck/400.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat nec erat ac tincidunt. Donec lacinia semper rhoncus. Nam a imperdiet tellus, ac dictum nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse iaculis mauris ultricies vestibulum placerat. Pellentesque a ante faucibus ipsum dictum lobortis sit amet non eros. Donec molestie iaculis diam, vel mattis sapien aliquet sodales. Ut sit amet nisi ultrices, lacinia sem sed, sollicitudin mauris. Fusce viverra euismod nisi at malesuada. Nam fermentum.'
  },
  {
    name: 'Vegan Digestive Cleanse',
    link: 'http://www.sarasotaintegrativehealth.com/shop/cleanses/vegan-digestive-cleanse/',
    image: 'NoelPuck/401.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat nec erat ac tincidunt. Donec lacinia semper rhoncus. Nam a imperdiet tellus, ac dictum nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse iaculis mauris ultricies vestibulum placerat. Pellentesque a ante faucibus ipsum dictum lobortis sit amet non eros. Donec molestie iaculis diam, vel mattis sapien aliquet sodales. Ut sit amet nisi ultrices, lacinia sem sed, sollicitudin mauris. Fusce viverra euismod nisi at malesuada. Nam fermentum.'
  }
];

$scope.skillsList1 = [
  {name: 'International Event Coordination'},
  {name: 'Social Media Srategy'},
  {name: 'Branding Development'},
  {name: 'Wedding Planner'},
  {name: 'Brand Colaberation'},
  {name: 'Fundraiser'},
  {name: 'Cooperate Events Dinner Parties Fashion Shows Premiers'},
  {name: 'Creative Consulting'},
  {name: 'Publicity'},
  {name: 'Photo and Gallery Production'},
  {name: 'Book and Speaking Agent'},
  {name: 'Sponsorship'}
];

$scope.skillsList = [
  {name: 'Audio/Visual'},
  {name: 'Budget Planning'},
  {name: 'Catering Consultation'},
  {name: 'Decor Selection'},
  {name: 'Entertaiment'},
  {name: 'Floral'},
  {name: 'Guest Gifts'},
  {name: 'Hotel Room Blocks'},
  {name: 'Itineraries'},
  {name: 'Invitations'},
  {name: 'Lighting and Sound'},
  {name: 'Onsite Management'},
  {name: 'Photography'},
  {name: 'Program, Rentals'},
  {name: 'Transportation'},
  {name: 'Venue Selection & Management'},
  {name: 'Videography'}
];

  $scope.categoryClick = function(menu){
    $scope.currentCategory = menu;
    console.log(menu);
   if (menu.link)
   {
     window.open(menu.link,'_self');
   }

   if($(".menu-container").css('display') === 'block')
   {
      $(".menu-container").hide();
   } else if($(".menu-container").css('display') === 'none')
   {
      $(".menu-container").show();
   }

   console.log("***********BEFORE***********")
   console.log($(".menu-container").css('display'));
   console.log("**********************")

   if(menu.name === 'skills'){
     console.log("You just clicked skill");
   }
 }

  $scope.meetWho = function (skill) {
    if (skill.link) {
      window.open(skill.link,'_self');
    }
  }

  for (var i=1; i <= numberOfImages; i++){
  	var element= $('<span id='+i+' style="background-image: url(NoelPuck/' + i + ')" class="gallerypic"></span>')
  	$(".picture-container").append(element);
  }

  for (var i=200; i <= indexOfLogoImages; i++){
    var element= $('<span id='+i+' style="background-image: url(NoelPuck/' + i + '.jpg)" class="logopic"></span>')
    $(".logo-container").append(element);
  }

  for (var i=500; i <= indexOfPressImages; i++){
    var element= $('<span id='+i+' style="background-image: url(NoelPuck/' + i + '.jpg)" class="home-page-press-pic"></span>')
    $(".home-page-press-container").append(element);
  }

  openImage= function(id){
  	console.log('I was asked to open '+ id);
  	console.log("I am about to open ", imagePath);

  	var imagePath = 'url(NoelPuck/'+id+')';

  	$('.full-size-image').css('background-image', imagePath);
  	$('.full-size-image').css('display', 'block');
  	$('.gallery-button').addClass('turned-on');

  	if(currentImage <= 1){
  		$('#prev-button').css('display', 'none');
  	}else{
  		$('#prev-button').css('display', 'inline-block');
  	}

  	if(currentImage >= numberOfImages){
  		$('#next-button').css('display', 'none');
  	}else{
  		$('#next-button').css('display', 'inline-block');
  	}
  };

  $('.gallerypic').click(function(event){
  	console.log('YOU SIR JUST CLICKED ', event);
  	currentImage= event.currentTarget.id;
  	openImage(currentImage);
  });


  $('.close-button').click(function(event){
  	$('.full-size-image').css('display', 'none');
  	$('.gallery-button').removeClass('turned-on');

  	$('#next-button').css('display', 'none');
  	$('#prev-button').css('display', 'none');
  });

$('#next-button').click(function(){
	console.log('kato just clicked next!!!');
	currentImage = parseInt(currentImage) + 1;
	openImage(currentImage);
})

$('#prev-button').click(function(){
	console.log('kato just clicked prev!!!');
	currentImage = parseInt(currentImage) - 1;
	openImage(currentImage);
})


});
