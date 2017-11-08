/*
Navicat MySQL Data Transfer

Source Server         : taobao
Source Server Version : 50556
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50556
File Encoding         : 65001

Date: 2017-11-08 18:53:57
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for list
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of list
-- ----------------------------
INSERT INTO `list` VALUES ('17', '做一个精彩的站点', '<p>为情怀而干杯，告别朴素的重复和一望无际的平庸</p>', 'http://localhost:3000/images/1510057047377.jpg', 'public/images/1510057047377.jpg', 'l', null);
INSERT INTO `list` VALUES ('18', '我在灯火阑珊处', '<p>起飞页是放飞梦想的地方，也是寻梦的地方</p>', 'http://localhost:3000/images/1510057111013.jpg', 'public/images/1510057111013.jpg', 'l', null);
INSERT INTO `list` VALUES ('25', '一页式模板', '<p><span style=\"color: rgb(142, 142, 142); font-family: 微软雅黑, Helvetica, Arial, Verdana, sans-serif;\">起飞页不仅是一个方便快捷的构建网站</span><br></p>', '', '', 'm', '');
INSERT INTO `list` VALUES ('26', '全屏呈现', '<p><span style=\"color: rgb(142, 142, 142); font-family: 微软雅黑, Helvetica, Arial, Verdana, sans-serif;\">满屏效果，信息更少，空白更多</span><br></p>', '', '', 'm', '');
INSERT INTO `list` VALUES ('27', '响应式设计', '<p><span style=\"color: rgb(142, 142, 142); font-family: 微软雅黑, Helvetica, Arial, Verdana, sans-serif;\">起飞页不仅是一个方便快捷的构建网站</span><br></p>', '', '', 'm', '');
INSERT INTO `list` VALUES ('28', '免费试用', '<p><span style=\"color: rgb(142, 142, 142); font-family: 微软雅黑, Helvetica, Arial, Verdana, sans-serif;\">起飞页不仅是一个方便快捷的构建网站</span><br></p>', '', '', 'm', '');
INSERT INTO `list` VALUES ('29', '支持WIN10', '<p><span style=\"color: rgb(142, 142, 142); font-family: 微软雅黑, Helvetica, Arial, Verdana, sans-serif;\">起飞页不仅是一个方便快捷的构建网站</span><br></p>', '', '', 'm', '');
INSERT INTO `list` VALUES ('30', '一键部署', '<p><span style=\"color: rgb(142, 142, 142); font-family: 微软雅黑, Helvetica, Arial, Verdana, sans-serif;\">起飞页不仅是一个方便快捷的构建网站</span><br></p>', '', '', 'm', '');
INSERT INTO `list` VALUES ('37', '服务', '<p><span style=\"color: rgb(255, 156, 0);\">橙色</span></p>', '', '', 'f', '');
INSERT INTO `list` VALUES ('38', '评价', '<span style=\"color: rgb(0, 255, 0);\">绿色</span>', 'http://localhost:3000/images/1510128022911.jpg', 'public/images/1510128022911.jpg', 'p', '');
INSERT INTO `list` VALUES ('45', '彭 少宏', '<p><span style=\"color: rgb(105, 105, 105); font-family: 微软雅黑; font-size: 12px; background-color: rgb(249, 249, 249);\">您可以双击这里或者点击编辑按钮来修改内容，您可以添加按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。</span><br></p>', 'http://localhost:3000/images/1510132840451.jpg', 'public/images/1510132840451.jpg', 't', '	CEO总经理');
INSERT INTO `list` VALUES ('47', '	张 义栋', '<p><span style=\"color: rgb(105, 105, 105); font-family: 微软雅黑; font-size: 12px; background-color: rgb(249, 249, 249);\">您可以双击这里或者点击编辑按钮来修改内容，您可以添加按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。</span><br></p>', 'http://localhost:3000/images/1510132926736.jpg', 'public/images/1510132926736.jpg', 't', '工程师');
INSERT INTO `list` VALUES ('48', '郭 思燕', '<p><span style=\"color: rgb(105, 105, 105); font-family: 微软雅黑; font-size: 12px; background-color: rgb(249, 249, 249);\">您可以双击这里或者点击编辑按钮来修改内容，您可以添加按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。</span><br></p>', 'http://localhost:3000/images/1510132952535.jpg', 'public/images/1510132952535.jpg', 't', '客服代表');
INSERT INTO `list` VALUES ('49', '梁 亚萍', '<p><span style=\"color: rgb(105, 105, 105); font-family: 微软雅黑; font-size: 12px; background-color: rgb(249, 249, 249);\">您可以双击这里或者点击编辑按钮来修改内容，您可以添加按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。</span><br></p>', 'http://localhost:3000/images/1510132973480.jpg', 'public/images/1510132973480.jpg', 't', '客服代表');
INSERT INTO `list` VALUES ('50', '彭 少宏', '<p><span style=\"color: rgb(105, 105, 105); font-family: 微软雅黑; font-size: 12px; background-color: rgb(249, 249, 249);\">您可以双击这里或者点击编辑按钮来修改内容，您可以添加按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。</span><br></p>', 'http://localhost:3000/images/1510133008798.jpg', 'public/images/1510133008798.jpg', 't', 'CEO总经理');
INSERT INTO `list` VALUES ('51', '张 义栋', '<p><span style=\"color: rgb(105, 105, 105); font-family: 微软雅黑; font-size: 12px; background-color: rgb(249, 249, 249);\">您可以双击这里或者点击编辑按钮来修改内容，您可以添加按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。</span><br></p>', 'http://localhost:3000/images/1510133033850.jpg', 'public/images/1510133033850.jpg', 't', '	工程师');
INSERT INTO `list` VALUES ('52', '郭 思燕', '<p><span style=\"color: rgb(105, 105, 105); font-family: 微软雅黑; font-size: 12px; background-color: rgb(249, 249, 249);\">您可以双击这里或者点击编辑按钮来修改内容，您可以添加按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。</span><br></p>', 'http://localhost:3000/images/1510133110583.jpg', 'public/images/1510133110583.jpg', 't', '	客服代表');
INSERT INTO `list` VALUES ('53', '梁 亚萍', '<p><span style=\"color: rgb(105, 105, 105); font-family: 微软雅黑; font-size: 12px; background-color: rgb(249, 249, 249);\">您可以双击这里或者点击编辑按钮来修改内容，您可以添加按钮图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。</span><br></p>', 'http://localhost:3000/images/1510133134046.jpg', 'public/images/1510133134046.jpg', 't', '客服代表');
