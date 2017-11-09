/*
Navicat MySQL Data Transfer

Source Server         : test
Source Server Version : 50556
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50556
File Encoding         : 65001

Date: 2017-11-09 16:18:10
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `list`
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 NOT NULL,
  `detail` varchar(255) CHARACTER SET utf8 NOT NULL,
  `img` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `img2` varchar(255) NOT NULL,
  `type` varchar(255) CHARACTER SET utf8 NOT NULL,
  `teamtext` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=94 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of list
-- ----------------------------
INSERT INTO `list` VALUES ('17', '做一个精彩的站点', '<p>为情怀而干杯，告别朴素的重复和一望无际的平庸</p>', 'http://localhost:3000/images/1510057047377.jpg', 'public/images/1510057047377.jpg', 'l', null, '0000-00-00 00:00:00');
INSERT INTO `list` VALUES ('18', '我在灯火阑珊处', '<p>起飞页是放飞梦想的地方，也是寻梦的地方</p>', 'http://localhost:3000/images/1510057111013.jpg', 'public/images/1510057111013.jpg', 'l', null, '0000-00-00 00:00:00');
INSERT INTO `list` VALUES ('25', '一页式模板', '<p><span style=\"color: rgb(142, 142, 142); font-family: 微软雅黑, Helvetica, Arial, Verdana, sans-serif;\">起飞页不仅是一个方便快捷的构建网站</span><br></p>', '', '', 'm', '', '0000-00-00 00:00:00');
INSERT INTO `list` VALUES ('26', '全屏呈现', '<p><span style=\"color: rgb(142, 142, 142); font-family: 微软雅黑, Helvetica, Arial, Verdana, sans-serif;\">满屏效果，信息更少，空白更多</span><br></p>', '', '', 'm', '', '0000-00-00 00:00:00');
INSERT INTO `list` VALUES ('27', '响应式设计', '<p><span style=\"color: rgb(142, 142, 142); font-family: 微软雅黑, Helvetica, Arial, Verdana, sans-serif;\">起飞页不仅是一个方便快捷的构建网站</span><br></p>', '', '', 'm', '', '0000-00-00 00:00:00');
INSERT INTO `list` VALUES ('28', '免费试用', '<p><span style=\"color: rgb(142, 142, 142); font-family: 微软雅黑, Helvetica, Arial, Verdana, sans-serif;\">起飞页不仅是一个方便快捷的构建网站</span><br></p>', '', '', 'm', '', '0000-00-00 00:00:00');
INSERT INTO `list` VALUES ('29', '支持WIN10', '<p><span style=\"color: rgb(142, 142, 142); font-family: 微软雅黑, Helvetica, Arial, Verdana, sans-serif;\">起飞页不仅是一个方便快捷的构建网站</span><br></p>', '', '', 'm', '', '0000-00-00 00:00:00');
INSERT INTO `list` VALUES ('30', '一键部署', '<p><span style=\"color: rgb(142, 142, 142); font-family: 微软雅黑, Helvetica, Arial, Verdana, sans-serif;\">起飞页不仅是一个方便快捷的构建网站</span><br></p>', '', '', 'm', '', '0000-00-00 00:00:00');
INSERT INTO `list` VALUES ('45', '彭 少宏', '<p><span style=\"color: rgb(105, 105, 105); font-family: 微软雅黑; font-size: 12px; background-color: rgb(249, 249, 249);\">您可以双击这里或者点击编辑按钮来修改内容，您可以添加按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。</span><br></p>', 'http://localhost:3000/images/1510132840451.jpg', 'public/images/1510132840451.jpg', 't', '	CEO总经理', '0000-00-00 00:00:00');
INSERT INTO `list` VALUES ('47', '	张 义栋', '<p><span style=\"color: rgb(105, 105, 105); font-family: 微软雅黑; font-size: 12px; background-color: rgb(249, 249, 249);\">您可以双击这里或者点击编辑按钮来修改内容，您可以添加按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。</span><br></p>', 'http://localhost:3000/images/1510132926736.jpg', 'public/images/1510132926736.jpg', 't', '工程师', '0000-00-00 00:00:00');
INSERT INTO `list` VALUES ('48', '郭 思燕', '<p><span style=\"color: rgb(105, 105, 105); font-family: 微软雅黑; font-size: 12px; background-color: rgb(249, 249, 249);\">您可以双击这里或者点击编辑按钮来修改内容，您可以添加按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。</span><br></p>', 'http://localhost:3000/images/1510132952535.jpg', 'public/images/1510132952535.jpg', 't', '客服代表', '0000-00-00 00:00:00');
INSERT INTO `list` VALUES ('49', '梁 亚萍', '<p><span style=\"color: rgb(105, 105, 105); font-family: 微软雅黑; font-size: 12px; background-color: rgb(249, 249, 249);\">您可以双击这里或者点击编辑按钮来修改内容，您可以添加按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。</span><br></p>', 'http://localhost:3000/images/1510132973480.jpg', 'public/images/1510132973480.jpg', 't', '客服代表', '0000-00-00 00:00:00');
INSERT INTO `list` VALUES ('50', '彭 少宏', '<p><span style=\"color: rgb(105, 105, 105); font-family: 微软雅黑; font-size: 12px; background-color: rgb(249, 249, 249);\">您可以双击这里或者点击编辑按钮来修改内容，您可以添加按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。</span><br></p>', 'http://localhost:3000/images/1510133008798.jpg', 'public/images/1510133008798.jpg', 't', 'CEO总经理', '0000-00-00 00:00:00');
INSERT INTO `list` VALUES ('51', '张 义栋', '<p><span style=\"color: rgb(105, 105, 105); font-family: 微软雅黑; font-size: 12px; background-color: rgb(249, 249, 249);\">您可以双击这里或者点击编辑按钮来修改内容，您可以添加按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。</span><br></p>', 'http://localhost:3000/images/1510133033850.jpg', 'public/images/1510133033850.jpg', 't', '	工程师', '0000-00-00 00:00:00');
INSERT INTO `list` VALUES ('52', '郭 思燕', '<p><span style=\"color: rgb(105, 105, 105); font-family: 微软雅黑; font-size: 12px; background-color: rgb(249, 249, 249);\">您可以双击这里或者点击编辑按钮来修改内容，您可以添加按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。</span><br></p>', 'http://localhost:3000/images/1510133110583.jpg', 'public/images/1510133110583.jpg', 't', '	客服代表', '0000-00-00 00:00:00');
INSERT INTO `list` VALUES ('53', '梁 亚萍', '<p><span style=\"color: rgb(105, 105, 105); font-family: 微软雅黑; font-size: 12px; background-color: rgb(249, 249, 249);\">您可以双击这里或者点击编辑按钮来修改内容，您可以添加按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。</span><br></p>', 'http://localhost:3000/images/1510133134046.jpg', 'public/images/1510133134046.jpg', 't', '客服代表', '0000-00-00 00:00:00');
INSERT INTO `list` VALUES ('54', '', '<p><br></p>', 'http://localhost:3000/images/1510187493905.jpg', 'public/images/1510187493905.jpg', 'x', '', '0000-00-00 00:00:00');
INSERT INTO `list` VALUES ('58', '', '<p><br></p>', 'http://localhost:3000/images/1510187972265.jpg', 'public/images/1510187972265.jpg', 'x', '', '0000-00-00 00:00:00');
INSERT INTO `list` VALUES ('59', '', '<p><br></p>', 'http://localhost:3000/images/1510188012913.jpg', 'public/images/1510188012913.jpg', 'x', '', '0000-00-00 00:00:00');
INSERT INTO `list` VALUES ('60', '', '<p><br></p>', 'http://localhost:3000/images/1510188049887.jpg', 'public/images/1510188049887.jpg', 'x', '', '0000-00-00 00:00:00');
INSERT INTO `list` VALUES ('61', '', '<p><br></p>', 'http://localhost:3000/images/1510188077200.jpg', 'public/images/1510188077200.jpg', 'x', '', '0000-00-00 00:00:00');
INSERT INTO `list` VALUES ('62', '', '<p><br></p>', 'http://localhost:3000/images/1510188115677.jpg', 'public/images/1510188115677.jpg', 'x', '', '0000-00-00 00:00:00');
INSERT INTO `list` VALUES ('63', '', '<p><br></p>', 'http://localhost:3000/images/1510188126627.jpg', 'public/images/1510188126627.jpg', 'x', '', '0000-00-00 00:00:00');
INSERT INTO `list` VALUES ('64', '', '<p><br></p>', 'http://localhost:3000/images/1510188182653.jpg', 'public/images/1510188182653.jpg', 'x', '', '0000-00-00 00:00:00');
INSERT INTO `list` VALUES ('65', '', '<p><br></p>', 'http://localhost:3000/images/1510188197755.jpg', 'public/images/1510188197755.jpg', 'x', '', '0000-00-00 00:00:00');
INSERT INTO `list` VALUES ('66', '', '<p><br></p>', 'http://localhost:3000/images/1510188217252.jpg', 'public/images/1510188217252.jpg', 'x', '', '0000-00-00 00:00:00');
INSERT INTO `list` VALUES ('67', '', '<p><br></p>', 'http://localhost:3000/images/1510188229242.jpg', 'public/images/1510188229242.jpg', 'x', '', '0000-00-00 00:00:00');
INSERT INTO `list` VALUES ('69', '', '<p><br></p>', 'http://localhost:3000/images/1510188270271.jpg', 'public/images/1510188270271.jpg', 'x', '', '0000-00-00 00:00:00');
INSERT INTO `list` VALUES ('70', '', '<p><br></p>', 'http://localhost:3000/images/1510188288733.jpg', 'public/images/1510188288733.jpg', 'x', '', '0000-00-00 00:00:00');
INSERT INTO `list` VALUES ('71', '', '<p><br></p>', 'http://localhost:3000/images/1510188299275.jpg', 'public/images/1510188299275.jpg', 'x', '', '0000-00-00 00:00:00');
INSERT INTO `list` VALUES ('72', '', '<p><br></p>', 'http://localhost:3000/images/1510188339239.jpg', 'public/images/1510188339239.jpg', 'x', '', '0000-00-00 00:00:00');
INSERT INTO `list` VALUES ('73', '', '<p><br></p>', 'http://localhost:3000/images/1510188384854.jpg', 'public/images/1510188384854.jpg', 'x', '', '0000-00-00 00:00:00');
INSERT INTO `list` VALUES ('74', '', '<p><br></p>', 'http://localhost:3000/images/1510189336500.jpg', 'public/images/1510189336500.jpg', 'x', '', '0000-00-00 00:00:00');
INSERT INTO `list` VALUES ('75', '', '<p><br></p>', 'http://localhost:3000/images/1510189352619.jpg', 'public/images/1510189352619.jpg', 'x', '', '0000-00-00 00:00:00');
INSERT INTO `list` VALUES ('76', '', '<p><br></p>', 'http://localhost:3000/images/1510189379712.jpg', 'public/images/1510189379712.jpg', 'x', '', '0000-00-00 00:00:00');
INSERT INTO `list` VALUES ('77', '', '<p><br></p>', 'http://localhost:3000/images/1510189389777.jpg', 'public/images/1510189389777.jpg', 'x', '', '0000-00-00 00:00:00');
INSERT INTO `list` VALUES ('78', '', '<p><br></p>', 'http://localhost:3000/images/1510189406865.jpg', 'public/images/1510189406865.jpg', 'x', '', '0000-00-00 00:00:00');
INSERT INTO `list` VALUES ('79', '', '<p><br></p>', 'http://localhost:3000/images/1510189459522.jpg', 'public/images/1510189459522.jpg', 'x', '', '0000-00-00 00:00:00');
INSERT INTO `list` VALUES ('82', '服 务 介 绍', '<p><span style=\"color: rgb(102, 102, 102); font-family: 微软雅黑, Helvetica, Arial, Verdana, sans-serif;\">応损捠捡换攳，攴朰朲朳枛朸桸桹桺奿妀。夲夳夵壱売壳圢圤圥圦圧！圩圪囡団囤囥咍咎，咐咑厺厼厽桻桼忝忞帄帇帉帊峢</span><br></p>', '', '', 'f', '', '0000-00-00 00:00:00');
INSERT INTO `list` VALUES ('83', '服 务 介 绍', '<p><span style=\"color: rgb(102, 102, 102); font-family: 微软雅黑, Helvetica, Arial, Verdana, sans-serif;\">応损捠捡换攳，攴朰朲朳枛朸桸桹桺奿妀。夲夳夵壱売壳圢圤圥圦圧！圩圪囡団囤囥咍咎，咐咑厺厼厽桻桼忝忞帄帇帉帊峢</span><br></p>', '', '', 'f', '', '0000-00-00 00:00:00');
INSERT INTO `list` VALUES ('84', '服 务 介 绍', '<p><span style=\"color: rgb(102, 102, 102); font-family: 微软雅黑, Helvetica, Arial, Verdana, sans-serif;\">応损捠捡换攳，攴朰朲朳枛朸桸桹桺奿妀。夲夳夵壱売壳圢圤圥圦圧！圩圪囡団囤囥咍咎，咐咑厺厼厽桻桼忝忞帄帇帉帊峢</span><br></p>', '', '', 'f', '', '0000-00-00 00:00:00');
INSERT INTO `list` VALUES ('85', '服 务 介 绍', '<p><span style=\"color: rgb(102, 102, 102); font-family: 微软雅黑, Helvetica, Arial, Verdana, sans-serif;\">応损捠捡换攳，攴朰朲朳枛朸桸桹桺奿妀。夲夳夵壱売壳圢圤圥圦圧！圩圪囡団囤囥咍咎，咐咑厺厼厽桻桼忝忞帄帇帉帊峢</span><br></p>', '', '', 'f', '', '0000-00-00 00:00:00');
INSERT INTO `list` VALUES ('90', 'H5', '<p>h5新闻、行情、趋势新闻、行情、趋势新闻、行情、趋势新闻、行情、趋势新闻、行情、趋势新闻、行情、趋势新闻、行情、趋势新闻、行情、趋势</p>', '', '', 'p', '', '2017-11-09 13:42:16');
INSERT INTO `list` VALUES ('91', 'css', '<p>css新闻、行情、趋势新闻、行情、趋势新闻、行情、趋势新闻、行情、趋势新闻、行情、趋势新闻、行情、趋势新闻、行情、趋势新闻、行情、趋势</p>', '', '', 'p', '', '2017-11-09 13:42:36');
INSERT INTO `list` VALUES ('92', 'JS', '<p>JS新闻、行情、趋势新闻、行情、趋势新闻、行情、趋势新闻、行情、趋势新闻、行情、趋势新闻、行情、趋势新闻、行情、趋势新闻、行情、趋势新闻、行情、趋势</p>', '', '', 'p', '', '2017-11-09 13:43:03');
INSERT INTO `list` VALUES ('93', 'node', '<p>node新闻、行情、趋势新闻、行情、趋势新闻、行情、趋势新闻、行情、趋势新闻、行情、趋势新闻、行情、趋势新闻、行情、趋势新闻、行情、趋势</p>', '', '', 'p', '', '2017-11-09 13:43:20');
