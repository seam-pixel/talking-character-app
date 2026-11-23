import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Volume2, RotateCcw, Sparkles } from 'lucide-react';

const MainCharacterVector = ({
  isSpeaking = false,
  mouthOpenAmount = 0,
  isBlinking = false,
  scale = 1,
}) => {
  // Dynamic mouth path interpolation for lip-sync[cite: 1]
  const mouthHeight = isSpeaking ? Math.max(4, mouthOpenAmount * 18) : 2;[cite: 1]

  return (
    <svg
      width={300 * scale}
      height={360 * scale}
      viewBox="0 0 300 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-2xl transition-transform duration-150"
      style={{
        transform: isSpeaking ? `translateY(${-mouthOpenAmount * 3}px)` : 'translateY(0px)',
      }}
    >
      <defs>
        <linearGradient id="lensTint" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4A1D24" stopOpacity="0.82" />
          <stop offset="100%" stopColor="#1E1B24" stopOpacity="0.92" />
        </linearGradient>
      </defs>

      {/* Shoulders & White Varsity Jacket[cite: 1] */}
      <g id="outfit">
        <path
          d="M40 355 C45 295, 85 275, 115 268 L185 268 C215 275, 255 295, 260 355 Z"
          fill="#F8FAFC"
          stroke="#0F172A"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        {/* Jacket Center Opening[cite: 1] */}
        <path
          d="M150 285 L150 355"
          stroke="#0F172A"
          strokeWidth="3.5"
        />
        {/* Ribbed Collar with Black Stripes[cite: 1] */}
        <path
          d="M105 265 Q150 305 195 265 L186 250 Q150 282 114 250 Z"
          fill="#FFFFFF"
          stroke="#0F172A"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        <path
          d="M110 258 Q150 293 190 258"
          stroke="#0F172A"
          strokeWidth="2.5"
          fill="none"
        />
      </g>

      {/* Neck[cite: 1] */}
      <path
        d="M122 215 L122 268 Q150 282 178 268 L178 215 Z"
        fill="#B5754A"
        stroke="#0F172A"
        strokeWidth="4"
      />

      {/* Ears[cite: 1] */}
      <path
        d="M84 152 C70 150, 68 185, 86 190"
        fill="#C68658"
        stroke="#0F172A"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M216 152 C230 150, 232 185, 214 190"
        fill="#C68658"
        stroke="#0F172A"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Head Base[cite: 1] */}
      <path
        d="M85 120 C85 75, 215 75, 215 120 L212 178 C210 218, 178 242, 150 242 C122 242, 90 218, 88 178 Z"
        fill="#C68658"
        stroke="#0F172A"
        strokeWidth="4"
      />

      {/* Beard & Mustache[cite: 1] */}
      <g id="facial-hair">
        <path
          d="M87 168 C88 215, 118 242, 150 242 C182 242, 212 215, 213 168 C206 188, 195 215, 172 222 C160 225, 140 225, 128 222 C105 215, 94 188, 87 168 Z"
          fill="#1E293B"
          stroke="#0F172A"
          strokeWidth="2.5"
        />
        <path
          d="M144 214 Q150 222 156 214 L153 226 L147 226 Z"
          fill="#1E293B"
        />
        <path
          d="M123 198 Q150 189 177 198 Q172 204 150 199 Q128 204 123 198 Z"
          fill="#1E293B"
          stroke="#0F172A"
          strokeWidth="2"
        />
      </g>

      {/* Animated Mouth[cite: 1] */}
      <g className="mouth-anim">
        {isSpeaking && mouthOpenAmount > 0.12 ? (
          <ellipse
            cx="150"
            cy="207"
            rx="13"
            ry={mouthHeight / 2}
            fill="#450A0A"
            stroke="#0F172A"
            strokeWidth="2.5"
          />
        ) : (
          <path
            d="M135 206 Q150 210 165 206"
            stroke="#0F172A"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
        )}
      </g>

      {/* Nose[cite: 1] */}
      <path
        d="M146 150 L141 178 Q150 184 159 178"
        stroke="#0F172A"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Eyes & Blinking[cite: 1] */}
      <g id="eyes">
        {isBlinking ? (
          <>
            <path d="M110 152 Q122 156 134 152" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
            <path d="M166 152 Q178 156 190 152" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
          </>
        ) : (
          <>
            <circle cx="122" cy="151" r="4.5" fill="#0F172A" />
            <circle cx="178" cy="151" r="4.5" fill="#0F172A" />
          </>
        )}
      </g>

      {/* Eyebrows[cite: 1] */}
      <path
        d="M102 135 Q122 128 140 136"
        stroke="#0F172A"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M160 136 Q178 128 198 135"
        stroke="#0F172A"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* Silver Double-Bridge Square Aviator Sunglasses[cite: 1] */}
      <g id="sunglasses">
        <line x1="85" y1="142" x2="98" y2="146" stroke="#CBD5E1" strokeWidth="3.5" />
        <line x1="215" y1="142" x2="202" y2="146" stroke="#CBD5E1" strokeWidth="3.5" />
        <line x1="140" y1="139" x2="160" y2="139" stroke="#CBD5E1" strokeWidth="3" />
        <line x1="142" y1="145" x2="158" y2="145" stroke="#CBD5E1" strokeWidth="2.5" />
        <rect
          x="98"
          y="138"
          width="44"
          height="32"
          rx="6"
          fill="url(#lensTint)"
          stroke="#E2E8F0"
          strokeWidth="3"
        />
        <rect
          x="158"
          y="138"
          width="44"
          height="32"
          rx="6"
          fill="url(#lensTint)"
          stroke="#E2E8F0"
          strokeWidth="3"
        />
        <line x1="106" y1="144" x2="116" y2="162" stroke="#FFFFFF" strokeOpacity="0.25" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="166" y1="144" x2="176" y2="162" stroke="#FFFFFF" strokeOpacity="0.25" strokeWidth="2.5" strokeLinecap="round" />
      </g>

      {/* Hair Peek & Terracotta Baseball Cap[cite: 1] */}
      <g id="headwear">
        <path
          d="M92 115 Q115 102 145 106 Q175 100 208 115 L205 95 L95 95 Z"
          fill="#0F172A"
        />
        <path
          d="M90 102 C92 48, 208 48, 210 102 Z"
          fill="#8B4527"
          stroke="#0F172A"
          strokeWidth="4"
        />
        <path
          d="M88 104 C105 78, 195 78, 212 104 C190 92, 110 92, 88 104 Z"
          fill="#73361C"
          stroke="#0F172A"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default function App() {
  const [status, setStatus] = useState('idle'); // 'idle' | 'listening' | 'speaking'
  const [mouthOpen, setMouthOpen] = useState(0);
  const [isBlinking, setIsBlinking] = useState(false);
  const [voicePitch, setVoicePitch] = useState(1.25); // 1 = normal, 1.25 = funny, 0.8 = deep
  const [autoMode, setAutoMode] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  const audioCtxRef = useRef(null);
  const streamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);
  const animFrameRef = useRef(null);
  const isMountedRef = useRef(true);
  const autoModeRef = useRef(autoMode);
  const voicePitchRef = useRef(voicePitch);

  useEffect(() => {
    autoModeRef.current = autoMode;
  }, [autoMode]);

  useEffect(() => {
    voicePitchRef.current = voicePitch;
  }, [voicePitch]);

  // Natural random eye blinking
  useEffect(() => {
    let blinkTimeout;
    const scheduleBlink = () => {
      const nextBlink = 2000 + Math.random() * 3500;
      blinkTimeout = setTimeout(() => {
        if (!isMountedRef.current) return;
        setIsBlinking(true);
        setTimeout(() => {
          if (isMountedRef.current) setIsBlinking(false);
          scheduleBlink();
        }, 160);
      }, nextBlink);
    };
    scheduleBlink();
    return () => clearTimeout(blinkTimeout);
  }, []);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
      stopAll();
    };
  }, []);

  const stopAll = () => {
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      try {
        mediaRecorderRef.current.stop();
      } catch (e) {}
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    }
    setStatus('idle');
    setMouthOpen(0);
  };

  const startListening = async () => {
    try {
      setErrorMsg('');
      if (!audioCtxRef.current) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtxRef.current = new AudioContext();
      }
      if (audioCtxRef.current.state === 'suspended') {
        await audioCtxRef.current.resume();
      }

      if (!streamRef.current) {
        streamRef.current = await navigator.mediaDevices.getUserMedia({
          audio: {
            echoCancellation: true,
            noiseSuppression: true,
            autoGainControl: true,
          },
        });
      }

      const audioCtx = audioCtxRef.current;
      const source = audioCtx.createMediaStreamSource(streamRef.current);
      const analyser = audioCtx.createAnalyser();
      analyser.fftSize = 256;
      source.connect(analyser);

      const dataArray = new Uint8Array(analyser.frequencyBinCount);
      chunksRef.current = [];

      const recorder = new MediaRecorder(streamRef.current);
      mediaRecorderRef.current = recorder;

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };

      recorder.onstop = () => {
        if (!isMountedRef.current) return;
        const blob = new Blob(chunksRef.current, { type: recorder.mimeType || 'audio/webm' });
        if (blob.size > 1000) {
          playRepeatedAudio(blob);
        } else if (autoModeRef.current && streamRef.current) {
          startListening();
        } else {
          setStatus('idle');
        }
      };

      recorder.start();
      setStatus('listening');

      // Voice Activity Detection (Auto-detect speech & silence)
      let hasSpoken = false;
      let silenceStart = null;
      const startTime = Date.now();

      const detectSound = () => {
        if (!isMountedRef.current || recorder.state !== 'recording') return;

        analyser.getByteFrequencyData(dataArray);
        let sum = 0;
        for (let i = 0; i < dataArray.length; i++) {
          sum += dataArray[i];
        }
        const avgVolume = sum / dataArray.length;

        if (autoModeRef.current) {
          if (avgVolume > 22) {
            hasSpoken = true;
            silenceStart = null;
          } else if (hasSpoken) {
            if (!silenceStart) silenceStart = Date.now();
            if (Date.now() - silenceStart > 1100) {
              recorder.stop();
              return;
            }
          } else if (Date.now() - startTime > 15000) {
            // Reset buffer if silent for too long
            recorder.stop();
            return;
          }
        }

        animFrameRef.current = requestAnimationFrame(detectSound);
      };

      detectSound();
    } catch (err) {
      setErrorMsg('মাইক্রোফোন পারমিশন পাওয়া যায়নি। ব্রাউজারে Allow দিন।');
      setStatus('idle');
    }
  };

  const stopManualRecord = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop();
    }
  };

  const playRepeatedAudio = async (blob) => {
    try {
      setStatus('speaking');
      const arrayBuffer = await blob.arrayBuffer();
      const audioCtx = audioCtxRef.current;
      const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);

      const source = audioCtx.createBufferSource();
      source.buffer = audioBuffer;
      source.playbackRate.value = voicePitchRef.current;

      const analyser = audioCtx.createAnalyser();
      analyser.fftSize = 256;

      source.connect(analyser);
      analyser.connect(audioCtx.destination);

      const dataArray = new Uint8Array(analyser.frequencyBinCount);

      const updateLipSync = () => {
        if (!isMountedRef.current) return;
        analyser.getByteFrequencyData(dataArray);
        let sum = 0;
        for (let i = 0; i < 40; i++) {
          sum += dataArray[i];
        }
        const level = Math.min(1, (sum / 40) / 110);
        setMouthOpen(level);
        animFrameRef.current = requestAnimationFrame(updateLipSync);
      };

      source.onended = () => {
        if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
        if (!isMountedRef.current) return;
        setMouthOpen(0);
        if (autoModeRef.current && streamRef.current) {
          setTimeout(() => {
            if (isMountedRef.current && autoModeRef.current) startListening();
          }, 300);
        } else {
          setStatus('idle');
        }
      };

      source.start(0);
      updateLipSync();
    } catch (e) {
      setStatus('idle');
      setMouthOpen(0);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950 text-white flex flex-col items-center justify-between p-4 select-none">
      {/* Header */}
      <div className="w-full max-w-md flex items-center justify-between pt-2">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-400" />
          <h1 className="font-bold text-lg tracking-wide">Talking Bro</h1>
        </div>
        <button
          onClick={() => {
            const next = !autoMode;
            setAutoMode(next);
            if (!next) stopAll();
          }}
          className={`px-3 py-1 rounded-full text-xs font-semibold transition ${
            autoMode
              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
              : 'bg-slate-700 text-slate-300'
          }`}
        >
          Auto Repeat: {autoMode ? 'ON' : 'OFF'}
        </button>
      </div>

      {/* Main Character Stage */}
      <div className="relative flex flex-col items-center justify-center my-auto">
        {/* Status Badge */}
        <div className="mb-4 h-8 flex items-center justify-center">
          {status === 'listening' && (
            <span className="px-4 py-1.5 rounded-full bg-rose-500/20 border border-rose-500/50 text-rose-300 text-sm font-medium flex items-center gap-2 animate-pulse">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
              শুনছি... কথা বলুন
            </span>
          )}
          {status === 'speaking' && (
            <span className="px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/50 text-amber-300 text-sm font-medium flex items-center gap-2">
              <Volume2 className="w-4 h-4 animate-bounce" />
              রিপিট করছে...
            </span>
          )}
          {status === 'idle' && (
            <span className="px-4 py-1.5 rounded-full bg-slate-800 text-slate-400 text-sm">
              নিচের বাটনে চাপ দিয়ে কথা শুরু করুন
            </span>
          )}
        </div>

        {/* Character SVG */}
        <div className="relative flex items-center justify-center">
          <div
            className={`absolute inset-0 rounded-full blur-3xl transition-opacity duration-300 ${
              status === 'speaking'
                ? 'bg-amber-500/20 opacity-100'
                : status === 'listening'
                ? 'bg-rose-500/15 opacity-100'
                : 'opacity-0'
            }`}
          />
          <MainCharacterVector
            isSpeaking={status === 'speaking'}
            mouthOpenAmount={mouthOpen}
            isBlinking={isBlinking}
            scale={1.05}
          />
        </div>
      </div>

      {/* Controls */}
      <div className="w-full max-w-md bg-slate-800/70 backdrop-blur-md border border-slate-700/60 rounded-3xl p-4 space-y-4">
        {errorMsg && (
          <p className="text-center text-xs text-rose-400 bg-rose-950/50 py-2 px-3 rounded-xl">
            {errorMsg}
          </p>
        )}

        {/* Voice Pitch Selector */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs text-slate-400 px-1">
            <span>ভয়েস স্টাইল (Pitch)</span>
            <span className="text-amber-400 font-medium">
              {voicePitch === 1 ? 'Normal' : voicePitch > 1 ? 'Funny Cartoon' : 'Deep Voice'}
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: 'Normal', val: 1.0 },
              { label: 'Funny 😄', val: 1.28 },
              { label: 'Deep 😎', val: 0.82 },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => setVoicePitch(item.val)}
                className={`py-2 rounded-xl text-xs font-semibold transition ${
                  voicePitch === item.val
                    ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/25'
                    : 'bg-slate-700/70 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Action Button */}
        <div className="flex items-center justify-center gap-3 pt-1">
          {autoMode ? (
            status === 'idle' ? (
              <button
                onClick={startListening}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-base flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 transition active:scale-95"
              >
                <Mic className="w-5 h-5" />
                Start Talking (মাইক চালু করুন)
              </button>
            ) : (
              <button
                onClick={stopAll}
                className="w-full py-3.5 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-base flex items-center justify-center gap-2 shadow-lg shadow-rose-600/25 transition active:scale-95"
              >
                <MicOff className="w-5 h-5" />
                Stop (বন্ধ করুন)
              </button>
            )
          ) : (
            <button
              onMouseDown={startListening}
              onMouseUp={stopManualRecord}
              onTouchStart={startListening}
              onTouchEnd={stopManualRecord}
              className={`w-full py-3.5 rounded-2xl font-bold text-base flex items-center justify-center gap-2 transition active:scale-95 ${
                status === 'listening'
                  ? 'bg-rose-600 text-white animate-pulse'
                  : 'bg-amber-500 text-slate-950'
              }`}
            >
              <Mic className="w-5 h-5" />
              {status === 'listening' ? 'ছেড়ে দিলে রিপিট করবে...' : 'চেপে ধরে কথা বলুন'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
