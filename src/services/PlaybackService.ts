// src/services/PlaybackService.ts
import TrackPlayer, {Event, RepeatMode} from 'react-native-track-player';

export const PlaybackService = async function () {
  TrackPlayer.addEventListener(Event.RemotePlay, () => TrackPlayer.play());

  TrackPlayer.addEventListener(Event.RemotePause, () => TrackPlayer.pause());

  TrackPlayer.addEventListener(Event.RemoteNext, () =>
    TrackPlayer.skipToNext(),
  );

  TrackPlayer.addEventListener(Event.RemotePrevious, () =>
    TrackPlayer.skipToPrevious(),
  );
};

export async function setupPlayer() {
  let isSetup = false;

  try {
    await TrackPlayer.getCurrentTrack();
    isSetup = true;
  } catch (error) {
    await TrackPlayer.setupPlayer();
    isSetup = true;
  } finally {
    return isSetup;
  }
}

export const addTrack = async (playListData: any) => {
  try {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.getCurrentTrack();
    await TrackPlayer.add(playListData);
  } catch (error) {
    console.log('error', error);
  } finally {
    await TrackPlayer.setRepeatMode(RepeatMode.Queue);
  }
};
