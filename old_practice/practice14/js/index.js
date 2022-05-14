$(function(){
    var image_one = new hoverEffect({
        parent: document.querySelector('.image-one'),
        intensity: 0.5,
        image1: 'https://pbs.twimg.com/media/D_B53V9UEAEnVlL?format=jpg&name=4096x4096',
        image2: 'https://pbs.twimg.com/media/D_B6BBDUcAAKTPY?format=jpg&name=4096x4096',
        displacementImage: 'https://images.pexels.com/photos/59810/smoke-fumes-black-white-59810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    });
    
    var image_two = new hoverEffect({
        parent: document.querySelector('.image-two'),
        intensity: 0.5,
        image1: 'https://pbs.twimg.com/media/D_B57qaVAAUXDi5?format=jpg&name=4096x4096',
        image2: 'https://pbs.twimg.com/media/D_B6Er7UIAAGqg8?format=jpg&name=4096x4096',
        displacementImage: 'https://images.pexels.com/photos/59810/smoke-fumes-black-white-59810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    });
    
    var image_three = new hoverEffect({
        parent: document.querySelector('.image-three'),
        intensity: 0.5,
        image1: 'https://pbs.twimg.com/media/D_B6BBDUcAAKTPY?format=jpg&name=4096x4096',
        image2: 'https://pbs.twimg.com/media/D_B53V9UEAEnVlL?format=jpg&name=4096x4096',
        displacementImage: 'https://images.pexels.com/photos/59810/smoke-fumes-black-white-59810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    });
    
    var image_four = new hoverEffect({
        parent: document.querySelector('.image-four'),
        intensity: 0.5,
        image1: 'https://pbs.twimg.com/media/D_B6Er7UIAAGqg8?format=jpg&name=4096x4096',
        image2: 'https://pbs.twimg.com/media/D_B57qaVAAUXDi5?format=jpg&name=4096x4096',
        displacementImage: 'https://images.pexels.com/photos/59810/smoke-fumes-black-white-59810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    });
    
})
