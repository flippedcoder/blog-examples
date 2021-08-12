import { useState, useEffect } from 'react'
import Web3 from 'web3'
import { VIDEO_LIST_ABI, VIDEO_LIST_ADDRESS } from '../../config'


export const DappPage = () => {
  const [account, setAccount] = useState<string>('')
  const [videoList, setVideoList] = useState<any>()
  const [videoCount, setVideoCount] = useState(0)
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:8912')

    const accounts = await web3.eth.getAccounts()
    setAccount(accounts[0])

    const videoList = new web3.eth.Contract(VIDEO_LIST_ABI, VIDEO_LIST_ADDRESS)

    setVideoList(videoList)

    for (var i = 1; i <= 1; i++) {
      // @ts-ignore
      const video = await videoList.videos(i)
      setVideos([...videos, video])
    }
  }

  const createVideo = (content) => {
    setLoading(true)
    videoList.methods.createVideo(content).send({ from: account })
      .once('receipt', (receipt) => {
        setLoading(false)
      })
  }

  return (
    <div>
      Dapp go here {account}
      <ul id="videoList">
        {videos.map((video, key) => {
          return (
            <div key={key}>
              <label>
                <span className="content">{video.url}</span>
              </label>
            </div>
          )
        })}
      </ul>
    </div>
  )
}
