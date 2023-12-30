import BG from "./assets/bg.jpg"
import foot from "./assets/foot.png"
import red from "./assets/red.jpg"
import Player from 'xgplayer';
import 'xgplayer/dist/index.min.css';
import './App.css'
import 'normalize.css'
import {createEffect, onCleanup} from "solid-js";
import {LiveService} from "./service";


function App() {
    let timerId:any;
    createEffect(() => {
        timerId = setInterval(async () => {
            const response = await LiveService.living()
            if (response.status === 404) {
                // 显示封面图片
                const player = new Player({
                    id: 'my-player',
                    url: '',
                    autoplay: false,
                    width: 327,
                    fitVideoSize: "fixWidth",
                    poster: `${response}`
                });
                player.poster = `${red}`
            } else {
                // 显示视频播放器
                const player = new Player({
                    id: 'my-player',
                    url: 'https://61-152-119-141.bytefcdnrd.com/dyp2p-huos.douyucdn2.cn/dyliveflv3/6828159roW80ktBQ.xs?wsAuth=51b205337081863df2ee8c57f1908354&token=web-h5-0-6828159-751999c48b5b61cc3980eaf4d8bbc25670416149f7ae630e&logo=0&expire=0&did=4d05c65c1e7dbd37ee2e530b00021701&ver=Douyu_222082905&pt=2&st=0&sid=376656155&mcid2=0&origin=tct&mix=0&isp=&delay=8000&playid=1703909430171-324160911&uuid=f4369b06-eb2e-4564-bb48-9c384c0cd8f3&txSecret=3ff6b88a76b28622c157b550115c85ab&txTime=658fec96',
                    autoplay: true,
                    width: 327,
                    fitVideoSize: "fixWidth",
                    poster: ''
                });
                player.play();
            }
        }, 1000);
    });

    onCleanup(() => {
        clearInterval(timerId);
    });

  return (
          <div class="liveList">
              <div id="my-player" class="live"></div>
              <img class="background-image" src={BG} alt=""/>
              <img class="bottom-image" src={foot} alt=""/>
          </div>
  )
}

export default App
