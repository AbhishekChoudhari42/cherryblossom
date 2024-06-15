export function drawTree(ctx,width,height){
    drawBranch(ctx,width/2,height - 50,-90,12)
} 

function deg_to_rad(angle){
    return angle*(Math.PI/180)
}

function cos(angle){
    return Math.cos(deg_to_rad(angle))
}

function sin(angle){
    return Math.sin(deg_to_rad(angle))
}

function random(min,max){
    return Math.random()*(max-min) + min
}

function drawBranch(ctx,x1,y1,angle,depth){
    const BRANCH_LENGTH = Math.random()*depth*9

    drawFlowers(ctx,x1,y1,depth)

    if(depth!=0){
        const x2 = x1 + cos(angle)*BRANCH_LENGTH
        const y2 = y1 + sin(angle)*BRANCH_LENGTH

        drawLine(ctx,x1,y1,x2,y2,depth)
        drawBranch(ctx,x2,y2,angle + random(15,25),depth-1)
        drawBranch(ctx,x2,y2,angle - random(15,25),depth-1)
    }
}

function drawLine(ctx,x1,y1,x2,y2,depth){
    
    if(depth < 3){
        ctx.strokeStyle = '#090'
    }else{
        ctx.strokeStyle = 'rgb(139,126,102,5)'
    }

    ctx.lineWidth = depth*1.1
    ctx.beginPath()
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2,y2)
    ctx.stroke()
    ctx.closePath()
}

function drawFlowers(ctx,x1,y1,depth){
    
    const r = Math.random()

    if(depth == 0){
        ctx.beginPath()
        ctx.fillStyle = r < 0.25 ? "f3ff" : r < 0.8 ? "#d0da" : "#e0ea";
        ctx.arc(x1,y1,r*5 + 1,0,2*Math.PI)
        ctx.fill()
        ctx.closePath()
        return
    }
    
    if(depth < 6){
        ctx.beginPath()
        ctx.fillStyle = "#3f35"
        ctx.arc(x1,y1,r*3 + 1,0,2*Math.PI)
        ctx.fill()
        ctx.closePath()
    }
}