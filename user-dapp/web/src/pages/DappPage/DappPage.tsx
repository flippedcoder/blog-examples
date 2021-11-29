import { useState, useEffect } from 'react'
import Web3 from 'web3'
import { VIDEO_LIST_ABI, VIDEO_LIST_ADDRESS } from '../../config'
import { WidgetLoader, Widget } from 'react-cloudinary-upload-widget'

export const DappPage = () => {
  const [account, setAccount] = useState<string>('')
  const [videoList, setVideoList] = useState<any>()
  const [videos, setVideos] = useState([])

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    const web3 = new Web3('http://localhost:7545')

    const accounts = await web3.eth?.getAccounts()

    setAccount(accounts[0])

    const videoList = new web3.eth.Contract(VIDEO_LIST_ABI, VIDEO_LIST_ADDRESS)
    setVideoList(videoList)

    const videoCount = await videoList.methods.videoCount().call()

    for (var i = 1; i <= videoCount; i++) {
      const video = await videoList.methods.videos(i).call()
      setVideos([...videos, video])
    }
  }

  const createVideo = (content) => {
    videoList.methods.createVideo(content).send({ from: account, gas: 4712388 })
      .once('receipt', (receipt) => {
        console.log(receipt)
      })
  }

  const successCallBack = (results) => {
    const videoInfo = results.info
    const url = videoInfo.url

    createVideo(url)
  }

  return (
    <div>
      Dapp account id: {account}
      <WidgetLoader />
      <Widget
        sources={['local', 'camera']}
        cloudName={'milecia'}
        uploadPreset={'cwt1qiwn'}
        buttonText={'Open'}
        style={{
          color: 'white',
          border: 'none',
          width: '120px',
          backgroundColor: 'green',
          borderRadius: '4px',
          height: '25px',
        }}
        folder={'test0'}
        onSuccess={successCallBack}
      />
      <ul id="videoList">
        {videos.map((video, key) => {
          return (
            <div key={key}>
              <label>
                <video src={video.url} width='350' height='250' controls></video>
              </label>
            </div>
          )
        })}
      </ul>
    </div>
  )
}
