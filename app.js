var app = angular.module('app', []);

app.controller('myController', function($scope){
$scope.currentCategory = {name: "none"};
$scope.currentTeam = {name: "none"};
$scope.categoryList = [
  {
    name: 'about',
      talent: [
        {
          name: 'Meet Noel',
          about: 'Im a mover and a shaker who landed in NYC just 3 days after graduating  to pursue my dreams in the entertainment industry. Ive been a professional NYC based Actress for several years.My passion is being of service to those making a positive difference in the world,both in the entertainment industry and health & wellness space. Some of my clients include: NY Times Best Selling Authors, Spiritual teachers, Yogis, Speakers, Change Agents, Celebrities, Global Leaders, & more. I am driven to create beautiful platforms to help my clients expand their reach beyond their wildest dreams.Noel Elie Productions was created due to the high demand for for reasonably priced, professional, creative producers. Let us help you ease your mind by executing your every need effortlessly and in style.'
        },
        {name: 'Meet the Team'}
      ]
  },
  {
   name: 'skills',
    talent: [
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
       {name: 'Sponsorship'},
     ]
 },
 {
   name: 'events'
 },
 {
   name: 'gratitude'
 },
 {
   name: 'gallery'
 },
 {
   name: 'words of wisdom'
 },
 {
   name: 'favorite things'
 },
 {
   name: 'contact'
 }
];

$scope.testimonialGallery = [
    {
      name: 'Kris Carr, New York Times best Selling Author',
      image: 'NoellePuck/testimonial0.jpg',
      description: 'Working with Noel is a dream come true! Shes an impeccable event producer whos detail oriented, supportive, and forward­thinking. When I work with Noel, Im able to focus on what matters most, delivering my message. She takes care of the rest!'
    },
    {
      name: 'Latham Thomas, Speaker, Author, & Founder of Mama Glow',
      image: 'NoellePuck/testimonial1.png',
      description: 'Noel Elie is the goddess of masterful organization and thoughtful execution. She pays such incredible attention to detail and has a remarkable way of keeping her cool regardless of the circumstances. She seeks to truly understand the needs of her client and delivers above and beyond the call of duty. She is a delightful spirit, a strategist, and forward thinking. Her peculiar talent for anticipating her clients needs is unparalleled. Noel & her team worked the launch of my book party sponsored by Morgan Stanley and Rebecca Minkoff and the night was incredible thanks to her meticulous care. Noel also produced a fundraiser for me that was a huge success!'
    },
    {
      name: 'Patricia Moreno, Best Selling Author, Speaker, & Founder of IntenSATI',
      image: 'NoellePuck/testimonial2.jpg',
      description: 'Its such a pleasure to get to work with Noel & her team. Create Your Dream Year was a great success and we couldnt have done it without her! She is professional, creative, and passionate about what she does­ making what could be a stressful experience, quite a pleasure!'
    },
    {
      name: 'Meggan Watterson, Best Selling Author, Speaker, & Founder of REVEAL',
      image: 'NoellePuck/testimonial5.jpg',
      description: 'Noel is an angel & an organizational ninja all rolled into one beautiful package. She is so masterful at creating the flow of an event that I am left to do what I do best without being distracted by the details that used to overwhelm me. If you are looking to create a flawless event, big or small, look no further! Noel Elie Productions is it!'
    },
    {
      name: 'Terri Cole, LCSW Licensed Psychotherapist, Speaker, and Transformation Coach',
      image: 'NoellePuck/testimonial3.png',
      description: 'Noel makes me feel so entirely provided for! I never worried once during any of my events. She took care of absolutely every detail which allowed me to just be fully present and entirely there­ a rare and invaluable gift'
    },
    {
      name: 'Joel Readence, Lifecoach',
      image: 'NoellePuck/testimonial4.jpg',
      description: 'Working a full time job and growing a coaching practice allowed me ZERO time to plan and execute a charity fundraiser for 250+ people. Hiring Noel was the best possible thing I could have done! Her in­depth knowledge of event planning and execution, ability to negotiate contracts and pricing, target and enlist sponsors, and utilize her extensive network of connections ensured a VERY successful event and a new fundraising record for my charity fund! Whether it be a book launch, a fundraiser, or a client retreat, I will never have another event without Noel’s involvement!'
    }



];


/*talent: [
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
  {name: 'Program'},
  {name: 'Rentals'},
  {name: 'Transportation'},
  {name: 'Venue Selection & Management'},
  {name: 'Videography'}
]*/

$scope.categoryClick = function(menu){
  $scope.currentCategory = menu;
  console.log(menu);
}

$scope.meetWho = function (skill) {
  $scope.currentTeam = skill.about;
  console.log(skill);
}
});
