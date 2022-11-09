import React from 'react'
import { BsPlayCircleFill, BsPauseCircleFill, BsFillSkipStartCircleFill, BsFillSkipEndCircleFill } from 'react-icons/bs'

function PlayButton({ Refrence, videos,setVideos,isPlaying,setIsPlaying,currentVideo,
    setCurrentVideo}) {

    function PlayPause() {
        setIsPlaying((prev)=>!prev)
        if(isPlaying){
            Refrence.current.play()
        }else{
            Refrence.current.pause()
        }
    }

    function PrevVideo (){
        const idx = videos.findIndex((el=>{
            return el.title === currentVideo.title}))
            if (idx===0){
                setCurrentVideo((prev)=>{
                    return prev =videos[videos.length-1]
                })
        } else {
            setCurrentVideo((prev)=>{
             return prev = videos[idx -1]
            })
        }

        setIsPlaying((prev)=>!prev)
    }

    function NextVideo (){
        const idx = videos.findIndex((el=> el.title === currentVideo.title))
            if (idx===videos.length-1){
                setCurrentVideo((prev)=>{
                    return prev =videos[0]
                })
        } else {
            setCurrentVideo((prev)=>prev = videos[idx + 1]
            )
        }
        setIsPlaying((prev)=>!prev)

    }

    return (
        <div className='Player'>
            <div className="title">
                <p>{currentVideo.title}</p>
            </div>
            <hr />
            <div className="controls">
                <BsFillSkipStartCircleFill onClick={PrevVideo} className='btn_action' />
                {isPlaying? <BsPlayCircleFill onClick={PlayPause}className='btn_action pp'/>:<BsPauseCircleFill onClick={PlayPause} className='btn_action pp' />}
                <BsFillSkipEndCircleFill onClick={NextVideo} className='btn_action' />
            </div>



        </div>
    )
}

export default PlayButton