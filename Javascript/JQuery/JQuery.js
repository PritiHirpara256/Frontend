/* JQuery */

/* syntax Document Object Model(DOM of JQuery) */

/* first */

// The Document Ready Event

// $(document).ready(function(){

//     // jQuery methods go here...
  
//   });


//   $(function(){

//     // jQuery methods go here...
  
//   });



// $(document).ready(function(){
//     $('#btn1').click(function(){
//         $('#firstHeading').hide()
//     })
// });

// $(document).ready(function(){
//     $('#btn2').click(function(){
//         $('#firstHeading').show()
//     })
// });

// $(function(){
//     $('#btn1').click(function(){
//         $('#firstHeading').hide()
//     })
// });

// $(function(){
//     $('#btn2').click(function(){
//         $('#firstHeading').show()
//     })
// });

// $(function(){
//     $('#btn3').click(function(){
//         $('#firstHeading').toggle()
//     })
// });

/* 29-07-2024 */

/* Fade Effect */

/* FadeIn, FadeOut, FadeToggle */

// $(function(){
//     $('#fadeIn').click(function(){
//         $('#div-1').fadeIn()
//         $('#div-2').fadeIn('slow')
//         $('#div-3').fadeIn(3000)
//         $('#div-4').fadeIn(4000)
//         $('#div-5').fadeIn('fast')
//         $('#div-6').fadeIn(5000)
//     })
// })

// $(function(){
//     $('#fadeOut').click(function(){
//         $('#div-1').fadeOut()
//         $('#div-2').fadeOut('slow')
//         $('#div-3').fadeOut(3000)
//         $('#div-4').fadeOut(4000)
//         $('#div-5').fadeOut('fast')
//         $('#div-6').fadeOut(5000)
//     })
// })

// $(function(){
//     $('#fadeToggle').click(function(){
//         $('#div-1').fadeToggle()
//         $('#div-2').fadeToggle('slow')
//         $('#div-3').fadeToggle(3000)
//         $('#div-4').fadeToggle(4000)
//         $('#div-5').fadeToggle(5000)
//         $('#div-6').fadeToggle(6000)
//     })
// })

// $(function(){
//     $('#fadeTo').click(function(){
//         $('#div-1').fadeTo()
//         $('#div-2').fadeTo('slow' , 0.2)
//         $('#div-3').fadeTo(3000 , 0.4)
//         $('#div-4').fadeTo(4000 , 0.5)
//         $('#div-5').fadeTo(5000 , 0.7 )
//         $('#div-6').fadeTo(6000 , 0.8)
//     })
// })

/* slide Effect */

// $(function(){
//     $('#slide').click(function(){
//         $("#slide-content").slideDown(2000)
//     })
// })

// $(function(){
//     $('#slide').click(function(){
//         $("#slide-content").slideUp(3000)
//     })
// })

// $(function(){
//     $('#slide').click(function(){
//         $("#slide-content").slideToggle(3000)
//     })
// })

/* stop */

// $(function(){
//     $('#start').click(function(){
//         $("#slide-content").slideDown(2000)
//     })
// })
// $(function(){
//     $('#stop').click(function(){
//         $("#slide-content").stop()
//     })
// })

/* Chaining */

// $(function(){
//      $('#slide').click(function(){
    //         $("#slide-content").slideToggle(2000)
//         $("#slide-content").slideDown(3000)
//         $("#slide-content").slideUp(4000)
//     })
// })

/* Animation */

// left to right

// $(function(){
//     $('.ani').click(function(){
//         $('.box1').animate({
//             left:'300px',
//             height:'250px',
//             width:'250px',
//             opacity:'0.7'
//         });
//     });
// });

//top to bottom

// $(function(){
//     $('.ani').click(function(){
//         $('.box2').animate({
//             top:'300px',
//             height:'250px',
//             width:'250px',
//             opacity:'0.7'
//         });
//     });
// });

// right to left

// $(function(){
//     $('.ani').click(function(){
//         $('.box3').animate({
//             left:'100px',
//             height:'250px',
//             width:'250px',
//             opacity:'0.7'
//         });
//     });
// });

//bottom to top

// $(function(){
//     $('.ani').click(function(){
//         $('.box4').animate({
//             top:'200px',
//             height:'250px',
//             width:'250px',
//             opacity:'0.7'
//         });
//     });
// });

/* callback */

// $(function(){
//     $('button').click(function(){
//         $('p').hide('slow',function(){
//             alert('this paragraph is hidden.')
//         })
//     })
// })


/* Get Method */

// $(function(){
//     $('#get').click(function(){
//         alert($('#firstHeading').text())
//     })
// })

// $(function(){
//     $('#get').click(function(){
//         alert($('#firstHeading').html())
//     })
// })

// $(function(){
//     $('#get').click(function(){
//         alert($('#inputs').val())
//     })
// })

/* SET method */

// $(function(){
//     $('#set').click(function(){
//         $('#firstHeading').text('Hello Javascript')
//     })
// })

// $(function(){
//     $('#set').click(function(){
//         $('#firstHeading').html('<span>set</span>')
//     })
// })

// $(function(){
//     $('#set').click(function(){
//         $('#inputs').val("DUCK")
//     })
// })

/* add method */

// append()

// $(function(){
//     $('#add').click(function(){
//         $('#firstHeading').append('Paragraph')
//     })
// })

// prepend()

// $(function(){
//     $('#add').click(function(){
//         $('#firstHeading').prepend('Paragraph')
//     })
// })

// after()

// $(function(){
//     $('#add').click(function(){
//         $('#firstHeading').after('Paragraph')
//     })
// })

// before()

// $(function(){
//     $('#add').click(function(){
//         $('#firstHeading').before('Paragraph')
//     })
// })


/* remove method */

// $(function(){
//     $('#remove').click(function(){
//         $('#box').remove()
//     })
// })

// $(function(){
//     $('#remove').click(function(){
//         $('#box').empty()
//     })
// })

/* CSS classes */

// addClass()

// $(function(){
//     $('#class1').click(function(){
//         $('#div-1').addClass('para')
//     })
// })

// removeClass()

// $(function(){
//     $('#class2').click(function(){
//         $('#div-1').removeClass('para')
//     })
// })

// toggleclass()

// $(function(){
//     $('#class3').click(function(){
//         $('#div-1').toggleClass('para')
//     })
// })

/* css() Method */

// $(function(){
//     $('#CSS').click(function(){
//         $('#lorem1').css({"background-color" : "yellow", 'color' : 'red'})  //multi-line CSS
//         $('#lorem2').css({"font-size" : "larger", 'color' : 'purple'})  //multi-line CSS
//         $('#lorem3').css("background-color","brown") // single line CSS
//     })
// })

