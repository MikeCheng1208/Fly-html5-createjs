                                                                        window                                                                    
                                                                        .                                                                         
                                                                      onload                                                                      
                                                                  =           function                                                            
                                                          (     )  {      function    e                                                           
                                                      (e){ 'image'      == e .                                                                    
                                                    item.type &&( images[ e.                                                                      
                                              item.id]=e.result);}function  t(){function e(){a                                                    
                                            .x<-n.width&&(a.x=n.width),l.x<-n.width&&(l.x=n .width),a.                                            
                                          x-=5, l.x-=5,o.y<500 ||L();}function d() {s.visible=!1,createjs.                                        
                                          Tween  .  removeTweens(o),createjs.Tween.get(o,{loop:!1},!0 ).to({y:                                    
                                            o . y-    70,rotation:-20},200,createjs.Ease.backIn() ).call( u),o                                    
                                        .           removeEventListener('tick',y) ,w.visible =!0,f.visible =!0;}                                  
                                      function u(){o.addEventListener('tick' ,y);}function y(){createjs.Tween.get(                                
                                    o,{loop: !1},!0).to({rotation:50},650,createjs    .Ease. backIn( ) ),o.y+=8; }                                
                    function b(){createjs.Ticker.addEventListener('tick',g), r              .   removeEventListener(                              
                    'click',b);}function  g(){if(m.x-=5,h.x-=5,v.x-=5,m.x<-195){var             e=Math.floor(3 *Math                              
                  .random()+0);m.x=440,m.y=T[e];}else if(h.x<-195 ){var e=Math.floor(3            *Math.random ()+0);h                            
                  .x=440,h.y=T[e]; }              else if(v  .x<-  195){var e=  Math .              floor  (  3* Math.                            
                      random() +              0);v.x= 440,v.y=                    T [e              ] ;     }ndgmr   .    checkRectCollision      
                      (o,m .h1            )    ||ndgmr .                        checkRectCollision  (o ,m.h2  )? L() :      ndgmr  .              
                                        checkRectCollision                    (o ,                  h.  h1  ) ||ndgmr.    checkRectCollision      
                                  (o,h. h2)?L():                          (                         ndgmr            .    checkRectCollision      
                                  (o ,v.h1   )||      ndgmr                                         .                     checkRectCollision      
                                    (o,v .h2) )&&L (),                                            ndgmr            .    checkRectCollision        
                                    (o,m.num_zz )?                                              createjs.  Ticker  .    addEventListener          
                                      (                                                       'tick' ,C)  :ndgmr .    checkRectCollision          
                                                    (o , h   .                            num_zz)? createjs    .      Ticker           .          
                                          addEventListener('tick',C ):ndgmr.checkRectCollision(o ,v.num_zz) &&      createjs .   Ticker.          
                                    addEventListener('tick',C);}function C(){ndgmr.checkRectCollision( o   ,m.    num_int )&&  (    createjs      
                      .           Ticker.removeEventListener ( 'tick',C) ,E ++ ,w.text=E,f .text=E ) ,ndgmr.    checkRectCollision  (o , h   .    
                    num_int     )&&(createjs.Ticker.removeEventListener('tick' ,C),E ++ ,w.text=E,f.text      =E  ) , ndgmr.                      
                    checkRectCollision (o,v.num_int)&& (createjs.Ticker.removeEventListener( 'tick',C),E ++ ,w.          text= E ,f .      text=E );}        
                  function L(){r.removeEventListener  ('mousedown',d) ,createjs .    Ticker  .                removeEventListener (   'tick',  g),    
                createjs.Ticker. removeEventListener              (     'tick',e  ),                          createjs .    Ticker             .  
        removeEventListener ( 'tick'    ,C  ),                                                                createjs .  Tween. removeTweens(o),o
    .removeEventListener ( 'tick',y ) , o.                                                                    gotoAndPlay ('boom'),k.visible=!0 ,x
    .visible = !0 ,x  .addEventListener(                                                                      'click' ,j  );   }      function  j(
  ){x.removeEventListener('click',j) ,                                                    t();}E= 0,c=new       lib .fly    (           ) ,r =new 
createjs .        Stage (n),r.addChild                                              (c), r. update()   , i() ,    createjs  .           Ticker   .
addEventListener      ( 'tick',e ), r.                                        addEventListener('mousedown',d )    ,r     .              addEventListener 
(                     'click'  , b)  ,                                    createjs. Ticker.    addEventListener(    'tick'            ,C   )   ,  
createjs  .   Ticker  . setFPS   ( lib .                              properties.    fps)    ,  createjs .Ticker .  addEventListener  ( 'tick'    
  ,r);} function i      (){d=new lib.BG ()                        ,a =new lib.Floor(),l=new lib.Floor(),o=new lib.    fBird( ),s=new lib.START    
  (),m=new  lib.        Hit(),h=new lib.Hit(), v          =new lib.Hit(),k=new lib .GAMEOVER()        ,x=new  lib  .  RESTART (),f=new createjs.  
    Text (0  ,          '86px \'Flappy Bird\'','#ffffff'),w  = new  createjs . Text (0 ,                    '86px \'Flappy Bird\'' ,'#000000') ,d.x=0,d.y=0  
      ,a.x= 0,            a.y=518.85,l.x=n.width,l.y=518.85,o.x=120 ,o.y=210,s.x =n.                          width/ 2  ,s.y= n.height/2,m.x=g    
          [ 0]              ,h.x=g[1],v.x=g[2],m.y= T[u],h.y=T[y],v.y=T[b],k.x=n                              . width/  2,k.y= n.height/2,x.x=    
            n               .width/ 2,x.y= n.height/ 2+80 ,c.addChild(d  ),c .                                addChild  (m), c.addChild(h)        
                                ,c.addChild(v),c.addChild(a),c.addChild (l),c.      addChild                  (o  ),c.  addChild( s),c            
                                  .addChild(k),c.addChild(x),k.visible=!1,x.visible =!                        1,  c  .  addChild (w,f )            
            , w.x=n.                  width/2 +2  , w.y=70,f.x=n.width/2,f.y=70,w.                            textAlign =       'center'          
          ,         f.                            textAlign       = 'center' ,w.                              visible = !1 ,f.    visible         
          = !1                                                        ; }var n,r,c                          ,d,o,a,l, s,m,h,v,    k, x            
          , f,                      w,E= 0,u                            =    Math.                      floor(3*Math. random()      +             
            0) ,y  =            Math      .                             floor  (3*                Math.random() +0),b=Math .        floor         
                ( 3*Math .    random      () +                          0),g =[435              ,655,875], T=[0,-57,-123];                        
                    n  =document .        getElementById                (                   'canvas'),images=  images||{};                        
                    var  C  =   new                                   createjs        .LoadQueue( !1        )      ;C.                            
              addEventListener     (            'fileload'          ,  e),  C.      addEventListener            (                                 
            'complete'    ,t ),   C.            loadManifest      ( lib    .      properties                    .                                 
          manifest)  ;    var L=  new           Stats ()    ;L .setMode(          0),   L.        domElement    .                                 
          style               . position        =  'absolute'   ,L   .      domElement .style .          left     =                                    
          '0px'                 ,  L       .        domElement .          style .  top   =          '0px'    ,                                    
          document      .         body       .                        appendChild ( L      .          domElement                                    
          );var  j    =             function() {L.            begin(),L. end    () ,requestAnimationFrame(j);}                                    
            ;                       requestAnimationFrame (        j  )  ;  };                                                                    








