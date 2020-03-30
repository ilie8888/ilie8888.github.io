$(window).load(function() {


    function startFishOne() {
        $("#fish_1").circulate({
            speed: 45000,
            height: 500,
            width: 1280,
            sizeAdjustment: 100,
            loop: true,
            zIndexValues: [1, -100, -100, 1]
        });
    }
       function startFishOneInverse() {
        $("#fish_11").circulate({
            speed: 45000,
            height: 500,
            width: 1280,
            sizeAdjustment: 100,
            loop: true,
            zIndexValues: [-100, 1, 1, -100]
        });
    }


    function startFishTwo() {
        $("#fish_2").circulate({
            speed: 20000,
            height: 450,
            width: -1280,
            sizeAdjustment: 100,
            loop: true,
            zIndexValues: [1, -100, -100, 1]
            
        })
    }

    function startFishTwoInverse() {
        $("#fish_22").circulate({
            speed: 20000,
            height: 450,
            width: -1280,
            sizeAdjustment: 100,
            loop: true,
            zIndexValues: [-100, 1, 1, -100]
            
        })
    }

          function startFishThry() {
        $("#fish_3").circulate({
            speed: 25000,
            height:450,
            width: 1280,
            sizeAdjustment: 100,
            loop: true,
             zIndexValues: [-100, 1, 1, -100]
        });
    }
       function startFishThryInverse() {
        $("#fish_33").circulate({
            speed: 25000,
            height: 450,
            width: 1280,
            sizeAdjustment: 100,
            loop: true,
             zIndexValues: [1, -100, -100, 1]
           
        });
    }
          function startFishFhor() {
        $("#fish_4").circulate({
            speed: 35000,
            height: 400,
            width: -1280,
            sizeAdjustment: 100,
            loop: true,
            zIndexValues: [1, -100, -100, 1]
        });
    }
       function startFishFhorInverse() {
        $("#fish_44").circulate({
            speed: 35000,
            height: 400,
            width: -1280,
            sizeAdjustment: 100,
            loop: true,
            zIndexValues: [-100, 1, 1, -100]
        });
    }
        function startFishFaive() {
        $("#fish_5").circulate({
            speed: 10000,
            height: 380,
            width: -1280,
            sizeAdjustment: 100,
            loop: true,
            zIndexValues: [1, -100, -100, 1]
        });
    }
       function startFishFaiveInverse() {
        $("#fish_55").circulate({
            speed: 10000,
            height: 380,
            width: -1280,
            sizeAdjustment: 100,
            loop: true,
            zIndexValues: [-100, 1, 1, -100]
        });
    }
  
    //     function startFishSix() {
    //     $("#fish_6").circulate({
    //         speed: 26000,
    //         height: 350,
    //         width: -1280,
    //         sizeAdjustment: 100,
    //         loop: true,
    //         zIndexValues: [1, -100, -100, 1]
    //     });
    // }
    //    function startFishSixInverse() {
    //     $("#fish_66").circulate({
    //         speed: 26000,
    //         height: 350,
    //         width: -1280,
    //         sizeAdjustment: 100,
    //         loop: true,
    //         zIndexValues: [-100, 1, 1, -100]
    //     });
    // }
  
    //     function startFishSet() {
    //     $("#fish_7").circulate({
    //         speed: 20000,
    //         height: 480,
    //         width: 1280,
    //         sizeAdjustment: 100,
    //         loop: true,
    //         zIndexValues: [1, -100, -100, 1]
    //     });
    // }
    //    function startFishSetInverse() {
    //     $("#fish_77").circulate({
    //         speed: 20000,
    //         height: 480,
    //         width: 1280,
    //         sizeAdjustment: 100,
    //         loop: true,
    //           zIndexValues: [-100, 1, 1, -100]
             

            

    //     });
    // }

            
    startFishOne();
    startFishOneInverse();

    startFishTwo();
    startFishTwoInverse();

    startFishThry();
    startFishThryInverse();
  
    startFishFhor();
    startFishFhorInverse()

    startFishFaive();
    startFishFaiveInverse();

    // startFishSix();
    // startFishSixInverse()

    // startFishSet();
    // startFishSetInverse();
    
});

