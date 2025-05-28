import { Heart } from "lucide-react";

  const healthData = {
  anatomicalStatus: [
    { id: 1, organ: 'Heart', status: 'Healthy Heart', color: '#10B981', position: { top: '25%', left: '45%' } },
    { id: 2, organ: 'Lungs', status: 'Lungs', color: '#EF4444', position: { top: '20%', left: '30%' } },
    { id: 3, organ: 'Teeth', status: 'Teeth', color: '#F59E0B', position: { top: '10%', left: '50%' } },
    { id: 4, organ: 'Bone', status: 'Bone', color: '#6B7280', position: { top: '40%', left: '60%' } }
  ],
  healthCards: [
    { id: 1, organ: 'Lungs', status: 'Minor Issue', date: 'Oct 12, 2021', color: '#EF4444', severity: 'medium',image:""},
    { id: 2, organ: 'Teeth', status: 'Good Condition', date: 'Oct 10, 2021', color: '#F59E0B', severity: 'low',image:"" },
    { id: 3, organ: 'Bone', status: 'Normal Density', date: 'Oct 08, 2021', color: '#10B981', severity: 'good',image:"" }
  ]
};
export default healthData;