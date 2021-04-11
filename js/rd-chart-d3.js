/* Radar chart design created by Nadieh Bremer - VisualCinnamon.com */
      

                /* Set-Up */
        
                var margin = {top: 100, right: 100, bottom: 100, left: 100},
                width = Math.min(700, window.innerWidth - 10) - margin.left - margin.right,
                height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);
                    

            /* Data */
            
            /* EX : 
            var data = [
                      [ // 1
                        {axis:"A",value:0.22},
                        {axis:"B",value:0.50}
                      ],[ // 2
                        {axis:"A",value:0.27},
                        {axis:"B",value:0.50}
                      ],[// 3
                        {axis:"A",value:0.26},
                        {axis:"B",value:0.50}
                      ]
                    ];
            */
            
            var data = [
                            [
                                {axis:"做一個決定有那麼難嗎",value:0.5},
                                {axis:"沒有人傳送了一個訊息給你",value:0.40},
                                {axis:"都沒人來按讚",value:1.0},
                                {axis:"好想滑手機",value:0.0},
                                {axis:"習慣啦哪次不習慣",value:0.95},
                                {axis:"我網路紅人欸",value:0.80},
                                {axis:"應用程式loop",value:0.80},
                                {axis:"這個最近很紅欸",value:0.80}

                            ],
                            
                        ];

            /* Draw the Chart */
            /*
            var color = d3.scale.ordinal()
                .range(["#EDC951","#CC333F","#00A0B0"]);
            */

            var color = d3.scale.ordinal()
                .range(["#EDC951"]);
                
            var radarChartOptions = {
              w: width,
              h: height,
              margin: margin,
              maxValue: 1, /* 控制範圍 */
              levels: 5,
              roundStrokes: true,
              color: color
            };
            /*Call function to draw the Radar chart */
            RadarChart(".radarChart", data, radarChartOptions);