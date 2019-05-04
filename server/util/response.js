module.exports = {
  serverError: function(messages, res) {
    const response = res.status(500).json({ success: false, flag: '5503', messages, });
    return response;
  },
  success: function(messages, res, data) {
    const response = res.status(200).json({ success: true, flag: '0000', messages, result: data, });
    return response;
  },
  notFound: function(messages, res) {
    const response = res.status(404).json({ success: false, flag: '5501', messages, });
    return response;
  },
  unauthorized: function(messages, res) {
    const response = res.status(401).json({ success: false, flag: '5504', messages, });
    return response;
  },
  invalidInput: function(messages, res) {
    const response = res.status(400).json({ success: false, flag: '5502', messages, });
    return response;
  },
  conflict: function(messages, res) {
    const response = res.status(409).json({ success: false, flag: 'Not Set yet', messages, }); // Need to set conflict flag
    return response;
  },
  forbidden: function(messages, res) {
    const response = res.status(403).json({ success: false, flag: 'Not Set yet', messages, }); // Need to find purpose of this
    return response;
  },
};
