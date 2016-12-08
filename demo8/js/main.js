                                                                                                                                                                                                                            
                                                                                                                                                                                                                            
                                                                                                                                                                                                                            
                                                                                                                              $           (                                                                                 
                                                          function                                                  (       )           {                                                                                   
                                                                                                                  function  e         (e )                                                                                    
                                                        {               'image'                               ==e  .  item .      type                                                                                      
                                                    && (          images                                [ e.item.id] =e.  result );}                                                                                        
                                                function      t(e ){                                  var                   t =e          .                     target ,                                                    
                      d           =   lib          .  ssMetadata          ;                                 for   (i= 0;i<d.        length ;                 i ++                                        ) ss                
                  [d[i ]        .   name  ] = new  createjs.          SpriteSheet                     ({images: [t.getResult              (d [            i]   .                                    name )                  
                ],frames : d [i ] .frames});o=new  lib.index(),r= new                   createjs  .Stage  (n),r.        addChild          ( o)          , o  .                          gotoAndStop(0 ),                    
                    $(window).scroll(function(){var e =$(window)                    .         scrollTop                 ( ),          t=  $(          document                ).height( ),i=$(window                        
                    )       .       height(),n= 0|  $('.world').                  offset    () .top,r=                  ( e-        n) /(t-i        ) *560|0;r                          > 559&&(r  =                        
                        559     )     ,  o .            gotoAndStop           ( r)        ;}),   $ (                  window    ).  scroll( ),$ (window  ). resize (                        function                        
                        (){$( window).scroll          ();} )   ,              createjs  .Ticker  .                            setFPS( lib.    properties .fps   ),                            createjs                      
                          . Ticker                  .             addEventListener (       'tick'   ,r )  ,                        function                (e,t,i ,o)                                {                             
                          function                d() {var d      =       lib   .  properties. width,l=   lib.            properties                  . height                                ,     h=                      
                                              window   .          innerWidth ,m=  window.innerHeight,   v=window    .        devicePixelRatio              ,w =                                h/d, f=m/l                      
                                            ,k=1;e&& (          'width'   ==t&&  a      ==     h  ||    'height'== t    && c==                          m? k=s                              :i ?1==o?k                      
                                          =Math  .            min       ( w,f):2        ==o &&                (k= Math    .               max             (  w,f                        ) ):(d>h ||l>m                      
                                        )  &&(  k=            Math      . min(          w                       ,f)  ) )  , n.        width               =d *v*k,                  n. height=  l* v                        
                                        *k , n .          style       .               width                     = d* k +    'px'   ,n.                      style.height= l*k+'px',r.scaleX=    v *k                        
                                        ,    r .        scaleY      =v*k ,                                      a=h ,c                                        =m ,s=k ;}var a,c,s=1; window.    addEventListener            
                                        ('resize',d),d() ;}(      ! 1,                                        'both' ,                                        !1,1);}var n, r,o;n=document      .                           
                                          getElementById          (                                         'canvas'                                      ) ,images=images    ||{},ss  =      ss                            
                                                              ||                      { };              var d  =                                  new  createjs  .          LoadQueue                                       
                                                            (                   ! 1)      ;  d             .                                addEventListener              (                                                 
                                                                            'fileload'                    ,                             e                             ) ,d .                                                
                                                                          addEventListener ('complete', t),d.                                                            loadManifest                                            
                                                                      (             lib     .                                                                     properties                                                
                                                                    .             manifest ) ;}                                                                                                                              
                                                                  );                                                                                                                                                        







































