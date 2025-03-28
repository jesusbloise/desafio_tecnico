// ✅ pages/api/weeklySummary.js
import weeklySummaryData from '../../data/weeklySummaryData';

export default function handler(req, res) {
  res.status(200).json(weeklySummaryData);
}
