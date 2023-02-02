var tl = gsap.timeline();

tl
.from(".n4",{
    onStart: function(){
        $('.n4').textillate(
            {in: { effect: 'fadeInUp',
            callback: function(){
                $('.n4').textillate('out') 
            }
        },
        out: { effect: 'fadeOutUp'}
    });
 
    }
})
.from(".n3",{
    opacity: 0,
    delay:1,
    onStart: function(){
        $('.n3').textillate(
            {in: { effect: 'fadeInUp',
            callback: function(){
                $('.n3').textillate('out') 
            }
        },
        out: { effect: 'fadeOutUp'}
    });
 
    }
})
.from(".n2",{
    opacity: 0,
    delay:1,
    onStart: function(){
        $('.n2').textillate(
            {in: { effect: 'fadeInUp',
            callback: function(){
                $('.n2').textillate('out') 
            }
        },
        out: { effect: 'fadeOutUp'}
    });
 
    }
})
.from(".n1",{
    opacity: 0,
    delay:1,
    onStart: function(){
        $('.n1').textillate(
            {in: { effect: 'fadeInUp',
            callback: function(){
                $('.n1').textillate('out') 
            }
        },
        out: { effect: 'fadeOutUp'}
    });
 
    }
})

.to("#main1",{
    delay:1,
    y:"-100%"
})
.to("#main",{
    top:"0%"
  
})
.from(".txt h1",{
    opacity:0,
    onStart: function(){
        $('.txt h1').textillate(
            {in: { effect: 'fadeInUp'}});
    }
},"a")
.from(".txt h2",{
    opacity:0,
    onStart: function(){
        $('.txt h2').textillate(
            {in: { effect: 'fadeInUp'}});
    }
},"a")

.from("#nav",{
    y: "-100%",
    ease: Power1.easeInOut
})
.from("#picbox img",{
    y:"130%",
    scale:1.5,
    duration:1,
    ease:Power4
})

   