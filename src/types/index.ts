export type DocType = 
  | 'modul_ajar'
  | 'atp'
  | 'prota_promes'
  | 'asesmen_rubrik'
  | 'jurnal_refleksi'
  | 'lkpd'
  | 'remedial_pengayaan';

export interface TeacherProfile {
  name: string;
  nip: string;
  subject: string;
  gradePhase: string;
  major: string;
  semester: 'Ganjil' | 'Genap';
  academicYear: string;
  dateStr: string;
  isVerified: boolean;
}

export interface AdminDocument {
  id: string;
  title: string;
  docType: DocType;
  topic: string;
  timeAllocation: string;
  createdAt: string;
  updatedAt: string;
  teacherProfile: TeacherProfile;
  htmlBody: string;
  markdownBody: string;
  summary: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export interface DocTypeOption {
  type: DocType;
  label: string;
  subtitle: string;
  badge: string;
  color: string;
  iconName: string;
  description: string;
}
