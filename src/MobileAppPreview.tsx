import { useState } from 'react';
import { Activity, ArrowRight, FileVideo2, Fingerprint, Eye, ScanFace } from 'lucide-react';

export default function MobileAppPreview() {
  const [language, setLanguage] = useState<'ur' | 'en'>(() => {
    const saved = localStorage.getItem('unfaked-app-language');
    return saved === 'en' ? 'en' : 'ur';
  });
  const urdu = language === 'ur';
  const chooseLanguage = (next: 'ur' | 'en') => {
    setLanguage(next);
    localStorage.setItem('unfaked-app-language', next);
  };
  const copy = urdu ? {
    greeting: 'خوش آمدید، الیکس', caption: 'شیئر کرنے سے پہلے میڈیا چیک کریں۔', check: 'اپنا میڈیا چیک کریں', media: 'تصویر · ویڈیو · آڈیو', choose: 'فائل منتخب کریں', recent: 'حالیہ چیکس', all: 'سب دیکھیں', review: 'جائزہ درکار', learn: 'باخبر رہیں', read: 'ڈیجیٹل حفاظت · 4 منٹ', lesson: 'اگر جانی پہچانی آواز، جانی پہچانی نہ لگے', guide: 'آگاہی گائیڈ', activity: 'ذاتی سرگرمی', insights: 'ڈیٹیکشن کی معلومات', help: 'سائبر کرائم کی اطلاع دیں', helpline: 'NCCIA · 24/7 ہیلپ لائن 1799', report: 'NCCIA پورٹل کھولیں', tabs: ['چیک', 'معلومات', 'سیکھیں', 'پروفائل'], note: 'زبان کسی بھی وقت تبدیل کریں'
  } : {
    greeting: 'Good morning, Alex', caption: 'Check media before you share it.', check: 'Check your media', media: 'Image · video · audio', choose: 'Choose a file', recent: 'Recent checks', all: 'View all', review: 'Review', learn: 'Stay informed', read: 'DIGITAL SAFETY · 4 MIN', lesson: 'When a familiar voice isn’t familiar', guide: 'Awareness guide', activity: 'PERSONAL ACTIVITY', insights: 'Detection insights', help: 'Report cybercrime', helpline: 'NCCIA · 24/7 helpline 1799', report: 'Open NCCIA portal', tabs: ['Check', 'Insights', 'Learn', 'Profile'], note: 'Change language anytime'
  };

  return <div className="phone-wrap" data-parallax="0.11">
    <div className={`phone-device app-device ${urdu ? 'is-urdu' : ''}`} dir={urdu ? 'rtl' : 'ltr'}>
      <div className="phone-island"/><div className="phone-status"><span>9:41</span><span>•••　◖</span></div>
      <div className="phone-head"><span className="app-brand-icon"><ScanFace size={16}/></span><b>UnFaked</b><div className="language-switch" aria-label="Choose app language"><button type="button" onClick={()=>chooseLanguage('ur')} className={urdu?'active':''} aria-pressed={urdu}>اردو</button><button type="button" onClick={()=>chooseLanguage('en')} className={!urdu?'active':''} aria-pressed={!urdu}>EN</button></div></div>
      {urdu ? <div className="urdu-app-reference">
        <img className="urdu-app-reference-image" src="/images/unfaked-urdu-app-reference.png" alt="UnFaked Urdu-first mobile app screen with media checks and safety guidance" />
        <a className="urdu-nccia-chip" href="https://complaint.nccia.gov.pk/" target="_blank" rel="noreferrer"><img src="/images/nccia-logo.png" alt=""/><span>NCCIA · 1799</span><ArrowRight size={12}/></a>
      </div> : <>
        <div className="phone-greeting">{copy.greeting}</div><div className="phone-caption">{copy.caption}</div>
        <div className="upload-area"><div className="upload-icon"><ScanFace size={22}/></div><b>{copy.check}</b><span>{copy.media}</span><button type="button">{copy.choose}<ArrowRight size={13}/></button></div>
        <div className="phone-row"><b>{copy.recent}</b><span>{copy.all}</span></div>
        <div className="history-row"><span className="history-thumb"><FileVideo2 size={17}/></span><span><b>clip_042.mp4</b><small>Video · Just now</small></span><em className="status-review">{copy.review}</em></div>
        <div className="phone-row awareness-title"><b>{copy.learn}</b><span>{copy.all}</span></div>
        <div className="learn-card"><span className="learn-label">{copy.read}</span><b>{copy.lesson}</b><div className="learn-foot">{copy.guide}<ArrowRight size={13}/></div></div>
        <div className="analytics-mini"><span>{copy.activity}</span><b>{copy.insights}</b><svg viewBox="0 0 190 28" preserveAspectRatio="none" aria-label="Personal detection history chart"><path d="M1 23 C18 22 21 15 37 17 S56 24 72 13 92 16 108 10 125 14 140 6 162 14 189 2" fill="none" stroke="#398ecc" strokeWidth="2"/><path d="M1 23 C18 22 21 15 37 17 S56 24 72 13 92 16 108 10 125 14 140 6 162 14 189 2 V28 H1Z" fill="#398ecc" opacity=".1"/></svg></div>
        <a className="phone-help" href="https://complaint.nccia.gov.pk/" target="_blank" rel="noreferrer"><span className="phone-help-icon"><img src="/images/nccia-logo.png" alt=""/></span><span><b>{copy.help}</b><small>{copy.helpline}</small></span><ArrowRight size={13}/></a>
        <div className="bottom-nav"><span><ScanFace/><small>{copy.tabs[0]}</small></span><span><Activity/><small>{copy.tabs[1]}</small></span><span><Eye/><small>{copy.tabs[2]}</small></span><span><Fingerprint/><small>{copy.tabs[3]}</small></span></div>
      </>}
    </div><div className="phone-note"><span className="note-dot"/>{copy.note}</div>
  </div>;
}
